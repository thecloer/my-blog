import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Info } from '@/types/data';
import { DATA_SOURCE } from '@/config';
import { generateSlug, releaseSlug } from '@/utils';
import { Blog } from '@/repository/blog';
import PostList from '@/components/blog/PostList';
import BlogLayout from '@/components/blog/BlogLayout';

interface Props {
  tagSlug: string;
  postInfos: Info<typeof DATA_SOURCE.blog>[];
  uniqueSeries: string[];
  uniqueTags: string[];
}
interface Params extends ParsedUrlQuery {
  tag_name: string;
}

const BlogTagNamePage: NextPage<Props> = ({ tagSlug, postInfos, uniqueSeries, uniqueTags }) => {
  return (
    <BlogLayout uniqueSeries={uniqueSeries} uniqueTags={uniqueTags}>
      <h1 className='text-center mb-16 text-4xl font-bold sm:mb-20 sm:text-5xl'>
        Tag: <span className='px-3 py-2 rounded-2xl bg-blue-300 capitalize'>{releaseSlug(tagSlug)}</span>
      </h1>
      <PostList postInfos={postInfos} />
      {/* TODO: Pagination */}
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { uniqueTags } = Blog.instance;
  const paths = uniqueTags.map((tag) => ({ params: { tag_name: generateSlug(tag) } }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const tagSlug = params!.tag_name;
  const blog = Blog.instance;
  const { uniqueSeries, uniqueTags } = blog;
  const infos = blog.getInfos();
  const postInfos = infos.filter(({ frontMatter: { tags } }) => tags && tags.map((tag) => generateSlug(tag)).includes(tagSlug));

  return {
    props: {
      tagSlug,
      postInfos,
      uniqueSeries,
      uniqueTags,
    },
  };
};

export default BlogTagNamePage;
