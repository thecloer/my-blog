import type { NextApiRequest, NextApiResponse } from 'next';
import { Blog } from '@/repository/blog';

export default async function searchHandler(req: NextApiRequest, res: NextApiResponse) {
  const searchQuery = req.query.q;
  if (typeof searchQuery === 'string') {
    const posts = Blog.instance.getInfos();
    const searchProperties = ['title', 'description'] as const;
    const result = posts.filter(({ frontMatter }) => searchProperties.some((key) => frontMatter[key].toLowerCase().includes(searchQuery)));
    return res.status(200).json({ result });
  }
  return res.status(400).json({ result: [] });
}
