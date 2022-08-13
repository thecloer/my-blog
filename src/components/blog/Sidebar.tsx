import type { FC } from 'react';
import Link from 'next/link';
import TagButton from '../common/TagButton';

interface Props {
  series: string[];
  tags: string[];
}

const Sidebar: FC<Props> = ({ series, tags }) => {
  return (
    <aside className='ml-16 px-6 py-4 rounded-xl border-2'>
      <div className='relative flex w-full mb-4'>
        <input type='text' placeholder='Search....' className='outline-none border-2 rounded-lg px-5 py-2 w-full' />
      </div>
      <section className='mb-4'>
        <h3 className='text-lg font-semibold mb-2'>Series</h3>
        <ul>
          {series.map((seriesName, i) => (
            <Link key={i} href={`/blog/series/${seriesName.toLowerCase().replaceAll(' ', '-')}`} passHref>
              <li className='flex flex-wrap break-words cursor-pointer hover:underline leading-relaxed'>
                <a>{seriesName}</a>
              </li>
            </Link>
          ))}
        </ul>
      </section>

      <section>
        <h3 className='text-lg font-semibold mb-2'>Tags</h3>
        <div className='flex flex-wrap'>
          {tags.map((tag, i) => (
            <TagButton key={i} tag={tag} />
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
