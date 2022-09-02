import type { FC } from 'react';
import Link from 'next/link';
import { generateSlug } from '@/utils';
import BlogTagButton from '@/components/blog/BlogTagButton';
import BlogSearch from './BlogSearch';

interface Props {
  uniqueSeries: string[];
  uniqueTags: string[];
}

const Sidebar: FC<Props> = ({ uniqueSeries, uniqueTags }) => {
  return (
    <aside className='ml-16 px-6 py-4 rounded-xl border-2'>
      <BlogSearch />
      <section className='mb-4'>
        <h3 className='text-lg font-semibold mb-2'>Series</h3>
        <ul>
          {uniqueSeries.map((series, i) => (
            <Link key={i} href={`/blog/search/series/${generateSlug(series)}`} passHref>
              <li className='flex flex-wrap break-words cursor-pointer hover:underline leading-relaxed capitalize'>
                <a>{series}</a>
              </li>
            </Link>
          ))}
        </ul>
      </section>

      <section>
        <h3 className='text-lg font-semibold mb-2'>Tags</h3>
        <div className='flex flex-wrap'>
          {uniqueTags.map((tag, i) => (
            <BlogTagButton key={i} tag={tag} />
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
