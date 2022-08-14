import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { PostFrontMatter } from '@/types/data';
import { readdirSync, readFileSync } from 'fs';
import Link from 'next/link';
import { join } from 'path';
import matter from 'gray-matter';
import { BLOG_DATA_PATH } from '@/config';
import TagButton from '@/components/common/TagButton';
import { customMarked } from '@/config/marked.config';

interface Props {
  slug: string;
  content: string;
  frontMatter: PostFrontMatter;
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
              <Link href={`/blog/series/${series.toLowerCase().replaceAll(' ', '-')}`} passHref>
                <a className='text-lg font-semibold text-slate-600 cursor-pointer hover:underline mb-2 block'>{series}</a>
              </Link>
            )}
            <h1 className='font-extrabold text-4xl mb-4'>{title}</h1>
            <span className='block mb-2'>{formattedDate}</span>
            <div className='flex flex-wrap '>
              {frontMatter.tags.map((tag, i) => (
                <TagButton key={i} tag={tag} className='transition-shadow hover:shadow-none shadow-lg' />
              ))}
            </div>
          </div>
          <article dangerouslySetInnerHTML={{ __html: customMarked(content) }} className='prose' />
        </section>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const files = readdirSync(BLOG_DATA_PATH);
  const paths = files.map((fileName) => ({
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
  const markdownWithMeta = readFileSync(join(BLOG_DATA_PATH, `${slug}.md`), 'utf-8');
  const { data, content } = matter(markdownWithMeta);
  const frontMatter = data as PostFrontMatter;
  return {
    props: {
      slug,
      content,
      frontMatter,
    },
  };
};

export default BlogSlug;
