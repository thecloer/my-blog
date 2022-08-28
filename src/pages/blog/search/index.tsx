import type { GetServerSideProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Info } from '@/types/data';
import Link from 'next/link';
import { DATA_SOURCE } from '@/config';
import { Blog } from '@/repository/blog';
import BlogLayout from '@/components/blog/BlogLayout';
import PostList from '@/components/blog/PostList';

interface Props {
  postInfos: Info<typeof DATA_SOURCE.blog>[];
  uniqueSeries: string[];
  uniqueTags: string[];
}
interface Params extends ParsedUrlQuery {
  q: string;
}

const BlogSearch: NextPage<Props> = ({ postInfos, uniqueSeries, uniqueTags }) => {
  return (
    <BlogLayout uniqueSeries={uniqueSeries} uniqueTags={uniqueTags}>
      <Link href='/blog' passHref>
        <button className=' px-3 py-1 mr-2 mb-8 rounded-md bg-indigo-300 shadow-md'>
          <a>All Posts</a>
        </button>
      </Link>
      {postInfos.length ? <PostList postInfos={postInfos} /> : <h1 className='text-center text-xl font-semibold'>No Results</h1>}
    </BlogLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ query }) => {
  const searchQuery = query?.q;

  if (!searchQuery || typeof searchQuery !== 'string')
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
      props: {},
    };

  const result = Blog.instance.search(searchQuery);
  const { uniqueSeries, uniqueTags } = Blog.instance;
  return {
    props: {
      postInfos: result,
      uniqueSeries,
      uniqueTags,
    },
  };
};

export default BlogSearch;
