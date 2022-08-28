import type { NextApiRequest, NextApiResponse } from 'next';
import { Blog } from '@/repository/blog';

export default async function searchHandler(req: NextApiRequest, res: NextApiResponse) {
  const searchQuery = req.query.q;
  if (typeof searchQuery === 'string') {
    const result = Blog.instance.search(searchQuery);
    return res.status(200).json({ result });
  }
  return res.status(400).json({ result: [] });
}
