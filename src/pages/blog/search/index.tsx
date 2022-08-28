import type { GetServerSideProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Info } from '@/types/data';
import { DATA_SOURCE } from '@/config';
import { Blog } from '@/repository/blog';
import BlogLayout from '@/components/blog/BlogLayout';
import PostList from '@/components/blog/PostList';
import BlogResultHeader from '@/components/blog/BlogResultHeader';

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
      <BlogResultHeader resultNum={postInfos.length} />
      <PostList postInfos={postInfos} />
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

  const result = Blog.instance.search(decodeURIComponent(searchQuery));
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
