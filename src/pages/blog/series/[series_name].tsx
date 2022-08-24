import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Info } from '@/types/data';
import { DATA_SOURCE } from '@/config';
import { generateSlug, releaseSlug } from '@/utils';
import { Blog } from '@/repository/blog';
import PostList from '@/components/blog/PostList';
import BlogLayout from '@/components/blog/BlogLayout';

interface Props {
  seriesSlug: string;
  postInfos: Info<typeof DATA_SOURCE.blog>[];
  uniqueSeries: string[];
  uniqueTags: string[];
}
interface Params extends ParsedUrlQuery {
  series_name: string;
}

const BlogSeriesNamePage: NextPage<Props> = ({ seriesSlug, postInfos, uniqueSeries, uniqueTags }) => {
  return (
    <BlogLayout uniqueSeries={uniqueSeries} uniqueTags={uniqueTags}>
      <h1 className='text-center mb-16 text-4xl font-semibold sm:mb-20 sm:text-5xl sm:font-bold capitalize'>{releaseSlug(seriesSlug)}</h1>
      <PostList postInfos={postInfos} />
      {/* TODO: Pagination */}
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { uniqueSeries } = Blog.instance;
  const paths = uniqueSeries.map((series) => ({ params: { series_name: generateSlug(series) } }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const seriesSlug = params!.series_name;
  const blog = Blog.instance;
  const { uniqueSeries, uniqueTags } = blog;
  const infos = blog.getInfos();
  const postInfos = infos.filter(({ frontMatter: { series } }) => series && generateSlug(series) === seriesSlug);

  return {
    props: {
      seriesSlug,
      postInfos,
      uniqueSeries,
      uniqueTags,
    },
  };
};

export default BlogSeriesNamePage;
