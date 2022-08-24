import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Info } from '@/types/data';
import { DATA_SOURCE, POSTS_PER_PAGE } from '@/config';
import { pageRange } from '@/utils';
import { Blog } from '@/repository/blog';
import PostList from '@/components/blog/PostList';
import Pagination from '@/components/common/pagination/Pagination';
import BlogLayout from '@/components/blog/BlogLayout';

interface Props {
  postInfos: Info<typeof DATA_SOURCE.blog>[];
  numPages: number;
  currentPage: number;
  uniqueSeries: string[];
  uniqueTags: string[];
}

interface Params extends ParsedUrlQuery {
  page_index: string;
}

const BlogPage: NextPage<Props> = ({ postInfos, numPages, currentPage, uniqueSeries, uniqueTags }) => {
  return (
    <BlogLayout uniqueSeries={uniqueSeries} uniqueTags={uniqueTags}>
      <PostList postInfos={postInfos} />
      <Pagination numPages={numPages} currentPage={currentPage} />
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { fileNames } = Blog.instance;
  const numPages = Math.ceil(fileNames.length / POSTS_PER_PAGE);
  const pageIndexList = pageRange(1, numPages);
  const paths = pageIndexList.map((i) => ({ params: { page_index: i.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const currentPage = params ? parseInt(params.page_index) : 1;
  const blog = Blog.instance;
  const { uniqueSeries, uniqueTags, fileNames } = blog;
  const numPages = Math.ceil(fileNames.length / POSTS_PER_PAGE);

  const postInfos = blog.getInfos();
  const orderedPostInfos = postInfos.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return {
    props: {
      postInfos: orderedPostInfos,
      numPages,
      currentPage,
      uniqueSeries,
      uniqueTags,
    },
  };
};

export default BlogPage;
