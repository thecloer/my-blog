import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Info } from '@/types/data';
import { DATA_SOURCE } from '@/config';
import { generateSlug, releaseSlug } from '@/utils';
import { Blog } from '@/repository/blog';
import PostList from '@/components/blog/PostList';
import BlogLayout from '@/components/blog/BlogLayout';

interface Props {
  parsedcategory: 'tag' | 'series';
  parsedSlug: string;
  postInfos: Info<typeof DATA_SOURCE.blog>[];
  uniqueSeries: string[];
  uniqueTags: string[];
}
interface Params extends ParsedUrlQuery {
  category: 'tag' | 'series';
  slug: string;
}

const BlogTagNamePage: NextPage<Props> = ({ parsedcategory, parsedSlug, postInfos, uniqueSeries, uniqueTags }) => {
  return (
    <BlogLayout uniqueSeries={uniqueSeries} uniqueTags={uniqueTags}>
      <h1 className='text-center mb-16 text-4xl font-semibold sm:mb-20 sm:text-5xl capitalize'>
        {parsedcategory === 'tag' ? <span className='px-3 py-2 rounded-2xl bg-blue-300'>{releaseSlug(parsedSlug)}</span> : releaseSlug(parsedSlug)}
      </h1>
      <PostList postInfos={postInfos} />
      {/* TODO: Pagination */}
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { uniqueTags, uniqueSeries } = Blog.instance;
  const tagPaths = uniqueTags.map((tag) => ({ params: { category: 'tag' as const, slug: generateSlug(tag) } }));
  const seriespPaths = uniqueSeries.map((series) => ({ params: { category: 'series' as const, slug: generateSlug(series) } }));

  const paths = [...tagPaths, ...seriespPaths];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const parsedcategory = params!.category;
  const parsedSlug = decodeURIComponent(params!.slug);
  const blog = Blog.instance;
  const { uniqueSeries, uniqueTags } = blog;
  const infos = blog.getInfos();
  const postInfos = infos.filter(
    parsedcategory === 'tag'
      ? ({ frontMatter: { tags } }) => tags && tags.some((tag) => generateSlug(tag) === parsedSlug)
      : ({ frontMatter: { series } }) => series && generateSlug(series) === parsedSlug
  );

  return {
    props: {
      parsedcategory,
      parsedSlug,
      postInfos,
      uniqueSeries,
      uniqueTags,
    },
  };
};

export default BlogTagNamePage;
