import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Info } from '@/types/data';
import { DATA_SOURCE } from '@/config';
import { titleToSlug } from '@/utils';
import { Blog } from '@/repository/blog';
import PostList from '@/components/blog/PostList';
import Sidebar from '@/components/blog/Sidebar';

interface Props {
  postInfos: Info<typeof DATA_SOURCE.blog>[];
  uniqueSeries: string[];
  uniqueTags: string[];
}
interface Params extends ParsedUrlQuery {
  series_name: string;
}

const BlogSeriesNamePage: NextPage<Props> = ({ postInfos, uniqueSeries, uniqueTags }) => {
  return (
    <div className='container-lg-62rem mx-auto px-8 md:px-0'>
      <div className='flex py-24'>
        <main className='md:w-2/3'>
          <h1 className='text-center mb-16 text-4xl font-semibold sm:mb-20 sm:text-5xl sm:font-bold'>{postInfos[0].frontMatter.series}</h1>
          <PostList postInfos={postInfos} />
          {/* TODO: Pagination */}
        </main>

        <div className='w-1/3 hidden md:block'>
          <Sidebar uniqueSeries={uniqueSeries} uniqueTags={uniqueTags} />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { uniqueSeries } = Blog.instance;
  const paths = uniqueSeries.map((series) => ({ params: { series_name: titleToSlug(series) } }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const seriesName = params!.series_name;
  const blog = Blog.instance;
  const { uniqueSeries, uniqueTags } = blog;
  const infos = blog.getInfos();
  const postInfos = infos.filter(({ frontMatter: { series } }) => series && titleToSlug(series) === seriesName);

  return {
    props: {
      postInfos,
      uniqueSeries,
      uniqueTags,
    },
  };
};

export default BlogSeriesNamePage;
