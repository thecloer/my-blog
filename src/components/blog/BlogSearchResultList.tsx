import type { FC } from 'react';
import type { Info } from '@/types/data';
import PostItem from './PostItem';

interface Props {
  result: Info<'blog'>[];
  isFocused: boolean;
}

const BlogSearchResultList: FC<Props> = ({ result, isFocused }) => {
  return result.length > 0 ? (
    <div
      className={`absolute top-11 right-0 p-4 z-10 border-2 border-slate-300 shadow-lg rounded-xl bg-slate-50 w-[515px] max-h-screen overflow-scroll 
                transition-transform duration-1000 animate-dropdown origin-top-right
                hover:block ${isFocused ? 'block' : 'hidden'}`}
    >
      <h2 className='text-2xl mb-3 text-right'>{result.length} Results</h2>
      {result.map((post, i) => (
        <PostItem key={i} postInfo={post} />
      ))}
    </div>
  ) : null;
};

export default BlogSearchResultList;
