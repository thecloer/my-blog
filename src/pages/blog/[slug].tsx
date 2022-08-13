import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { PostFrontMatter } from '@/types/data';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { BLOG_DATA_PATH } from '@/config';

interface Props {
  slug: string;
  content: string;
  frontMatter: PostFrontMatter;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogSlug: NextPage<Props> = ({ slug, content, frontMatter }) => {
  return (
    <div className='container-lg-62rem mx-auto px-8 md:px-0'>
      <main className='flex py-24 justify-center'>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} className='prose' />
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
