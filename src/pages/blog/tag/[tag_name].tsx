import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { Info } from '@/types/data';
import { DATA_SOURCE } from '@/config';
import { capitalize, generateSlug } from '@/utils';
import { Blog } from '@/repository/blog';
import PostList from '@/components/blog/PostList';
import Sidebar from '@/components/blog/Sidebar';

interface Props {
  tagName: string;
  postInfos: Info<typeof DATA_SOURCE.blog>[];
  uniqueSeries: string[];
  uniqueTags: string[];
}
interface Params extends ParsedUrlQuery {
  tag_name: string;
}

const BlogTagNamePage: NextPage<Props> = ({ tagName, postInfos, uniqueSeries, uniqueTags }) => {
  return (
    <div className='container-lg-62rem mx-auto px-8 md:px-0'>
      <div className='flex py-24'>
        <main className='md:w-2/3'>
          <h1 className='text-center mb-16 text-4xl font-bold sm:mb-20 sm:text-5xl'>
            Tag: <span className='px-3 py-2 rounded-2xl bg-blue-300'>{capitalize(tagName)}</span>
          </h1>
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
  const { uniqueTags } = Blog.instance;
  const paths = uniqueTags.map((tag) => ({ params: { tag_name: generateSlug(tag) } }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const tagName = params!.tag_name;
  const blog = Blog.instance;
  const { uniqueSeries, uniqueTags } = blog;
  const infos = blog.getInfos();
  const postInfos = infos.filter(({ frontMatter: { tags } }) => tags && tags.map((tag) => generateSlug(tag)).includes(tagName));

  return {
    props: {
      tagName,
      postInfos,
      uniqueSeries,
      uniqueTags,
    },
  };
};

export default BlogTagNamePage;
