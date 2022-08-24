import { type FormEvent, useEffect, useState } from 'react';
import type { Info } from '@/types/data';
import SearchResultList from './SearchResultList';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<Info<'blog'>[]>([]);

  useEffect(() => {
    (async () => {
      if (searchTerm.length < 2) setSearchResult([]);
      else {
        const res = await fetch(`/api/blog/search?q=${searchTerm}`);
        const { result } = await res.json();
        setSearchResult(result);
      }
    })();
  }, [searchTerm]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm); // TODO: go to `/pages/blog/search?q=${searchTerm}`
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
      <SearchResultList result={searchResult} isFocused={isFocused} />
    </div>
  );
};

export default Search;
