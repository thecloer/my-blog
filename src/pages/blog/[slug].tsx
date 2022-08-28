import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { FrontMatter } from '@/types/data';
import Link from 'next/link';
import { DATA_SOURCE } from '@/config';
import { customMarked } from '@/config/marked.config';
import { Blog } from '@/repository/blog';
import BlogTagButton from '@/components/blog/BlogTagButton';

interface Props {
  slug: string;
  content: string;
  frontMatter: FrontMatter<typeof DATA_SOURCE.blog>;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogSlug: NextPage<Props> = ({ slug, content, frontMatter }) => {
  const { title, series, tags, date } = frontMatter;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className='container-lg-62rem mx-auto px-8 md:px-0'>
      <main className='py-24'>
        <section className='mx-auto max-w-[65ch]'>
          <div className='mb-20 pb-4 border-b-2'>
            {series === null || (
              <Link href={`/blog/search/series/${series.toLowerCase().replaceAll(' ', '-')}`} passHref>
                <a className='text-lg font-semibold text-slate-600 cursor-pointer hover:underline mb-2 block'>{series}</a>
              </Link>
            )}
            <h1 className='font-extrabold text-4xl mb-4'>{title}</h1>
            <span className='block mb-2'>{formattedDate}</span>
            <div className='flex flex-wrap '>{tags && tags.map((tag, i) => <BlogTagButton key={i} tag={tag} className='transition-shadow hover:shadow-none shadow-lg' />)}</div>
          </div>
          <article dangerouslySetInnerHTML={{ __html: customMarked(content) }} className='prose' />
        </section>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = Blog.instance.fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const slug = params!.slug;
  const { content, frontMatter } = Blog.instance.getData(`${slug}.md`);
  return {
    props: {
      slug,
      content,
      frontMatter,
    },
  };
};

export default BlogSlug;
