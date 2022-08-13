import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { readdirSync } from 'fs';
import { PostInfo } from '@/types/data';
import { getBlogPosts } from '@/lib/blog';
import { BLOG_DATA_PATH, POSTS_PER_PAGE } from '@/config';
import Sidebar from '@/components/blog/Sidebar';
import PostList from '@/components/blog/PostList';
import Pagination from '@/components/common/pagination/Pagination';

interface Props {
  posts: PostInfo[];
  numPages: number;
  currentPage: number;
  series: string[];
  tags: string[];
}

interface Params extends ParsedUrlQuery {
  page_index: string;
}

const BlogPage: NextPage<Props> = ({ posts, numPages, currentPage, series, tags }) => {
  return (
    <div className='container-lg-62rem mx-auto px-8 md:px-0'>
      <div className='flex py-24'>
        <main className='md:w-2/3'>
          <PostList posts={posts} />
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
  const files = readdirSync(BLOG_DATA_PATH);
  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
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

  const files = readdirSync(BLOG_DATA_PATH);
  const posts = getBlogPosts();

  const series = posts.map((post) => post.frontMatter?.series);
  const seriesSet = new Set(series);
  if (seriesSet.has(null)) seriesSet.delete(null);
  const uniqueSeries = [...seriesSet] as string[];

  const tags = posts.flatMap((post) => post.frontMatter.tags);
  const uniqueTags = [...new Set(tags)];

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      series: uniqueSeries,
      tags: uniqueTags,
    },
  };
};

export default BlogPage;
