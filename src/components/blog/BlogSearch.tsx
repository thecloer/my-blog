import { type FormEvent, useEffect, useState } from 'react';
import type { Info } from '@/types/data';
import { useRouter } from 'next/router';
import { useDebounce } from '@/hooks';
import BlogSearchResultList from './BlogSearchResultList';

const BlogSearch = () => {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<Info<'blog'>[]>([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    (async () => {
      if (debouncedSearchTerm.length < 2) setSearchResult([]);
      else {
        const res = await fetch(`/api/blog/search?q=${encodeURIComponent(debouncedSearchTerm)}`);
        const { result } = await res.json();
        setSearchResult(result);
      }
    })();
  }, [debouncedSearchTerm]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.length === 1) return;
    setSearchTerm('');
    router.push(`/blog/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className='relative flex w-full mb-4'>
      <form onSubmit={onSubmitHandler}>
        <input
          type='search'
          placeholder='Search....'
          className='outline-none border-2 rounded-lg px-5 py-2 w-full'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </form>
      <BlogSearchResultList result={searchResult} isFocused={isFocused} />
    </div>
  );
};

export default BlogSearch;
