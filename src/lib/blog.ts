import type { PostFrontMatter, PostInfo } from '@/types/data';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { sortByDateDESC } from '@/utils';
import { BLOG_DATA_PATH } from '@/config';

const files = readdirSync(BLOG_DATA_PATH);

export function getBlogPosts() {
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const markdownWithMeta = readFileSync(join(BLOG_DATA_PATH, fileName), 'utf-8');
    const { data } = matter(markdownWithMeta);
    const frontMatter = data as PostFrontMatter;
    return { slug, frontMatter } as PostInfo;
  });

  return posts.sort(sortByDateDESC);
}
