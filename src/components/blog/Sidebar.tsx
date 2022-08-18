import type { FC } from 'react';
import Link from 'next/link';
import { titleToSlug } from '@/utils';
import TagButton from '@/components/common/TagButton';

interface Props {
  uniqueSeries: string[];
  uniqueTags: string[];
}

const Sidebar: FC<Props> = ({ uniqueSeries, uniqueTags }) => {
  return (
    <aside className='ml-16 px-6 py-4 rounded-xl border-2'>
      <div className='relative flex w-full mb-4'>
        <input type='text' placeholder='Search....' className='outline-none border-2 rounded-lg px-5 py-2 w-full' />
      </div>
      <section className='mb-4'>
        <h3 className='text-lg font-semibold mb-2'>Series</h3>
        <ul>
          {uniqueSeries.map((series, i) => (
            <Link key={i} href={`/blog/series/${titleToSlug(series)}`} passHref>
              <li className='flex flex-wrap break-words cursor-pointer hover:underline leading-relaxed'>
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
            <TagButton key={i} tag={tag} />
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
