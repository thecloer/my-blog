import Link from 'next/link';
import { FC } from 'react';

interface Props {
  resultNum: number;
}

const BlogResultHeader: FC<Props> = ({ resultNum }) => {
  return (
    <div className='mb-12 flex justify-between'>
      <h2 className='text-2xl font-semibold'>Results: {resultNum}</h2>
      <Link href='/blog' passHref>
        <button className='px-3 py-1 rounded-md bg-indigo-300 shadow-md'>
          <a>All Posts</a>
        </button>
      </Link>
    </div>
  );
};

export default BlogResultHeader;
