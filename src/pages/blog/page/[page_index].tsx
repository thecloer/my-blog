import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Info } from '@/types/data';
import { DATA_SOURCE, POSTS_PER_PAGE } from '@/config';
import { Blog } from '@/repository/blog';
import Sidebar from '@/components/blog/Sidebar';
import PostList from '@/components/blog/PostList';
import Pagination from '@/components/common/pagination/Pagination';

interface Props {
  postInfos: Info<typeof DATA_SOURCE.blog>[];
  numPages: number;
  currentPage: number;
  series: string[];
  tags: string[];
}

interface Params extends ParsedUrlQuery {
  page_index: string;
}

const BlogPage: NextPage<Props> = ({ postInfos, numPages, currentPage, series, tags }) => {
  return (
    <div className='container-lg-62rem mx-auto px-8 md:px-0'>
      <div className='flex py-24'>
        <main className='md:w-2/3'>
          <PostList postInfos={postInfos} />
          <Pagination numPages={numPages} currentPage={currentPage} />
        </main>

        <div className='w-1/3 hidden md:block'>
          <Sidebar series={series} tags={tags} />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { fileNames } = Blog.instance;
  const numPages = Math.ceil(fileNames.length / POSTS_PER_PAGE);
  const paths: { params: Params }[] = [];
  for (let i = 1; i <= numPages; i++) {
    paths.push({ params: { page_index: i.toString() } });
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const page = params ? parseInt(params.page_index) : 1;

  const postInfos = Blog.instance.getInfos();

  const series = postInfos.map((post) => post.frontMatter.series);
  const seriesSet = new Set(series);
  if (seriesSet.has(null)) seriesSet.delete(null);
  const uniqueSeries = [...seriesSet] as string[];

  const tags = postInfos.flatMap((post) => post.frontMatter.tags);
  const uniqueTags = [...new Set(tags)];

  const numPages = Math.ceil(Blog.instance.fileNames.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPostInfos = postInfos.slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);

  return {
    props: {
      postInfos: orderedPostInfos,
      numPages,
      currentPage: page,
      series: uniqueSeries,
      tags: uniqueTags,
    },
  };
};

export default BlogPage;
