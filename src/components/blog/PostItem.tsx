import type { FC } from 'react';
import type { Info } from 'src/types/data';
import Image from 'next/image';
import Link from 'next/link';
import { DATA_SOURCE } from '@/config';
import TagButton from '@/components/common/TagButton';

interface Props {
  postInfo: Info<typeof DATA_SOURCE.blog>;
}

const PostItem: FC<Props> = ({ postInfo: { slug, frontMatter } }) => {
  return (
    <article className='flex py-8 md:flex-row flex-col'>
      <div className='flex flex-col items-center'>
        <Link href={`/blog/${slug}`} passHref>
          <div
            className='relative cursor-pointer shrink-0 rounded-xl overflow-hidden
                    h-40 w-40 mb-4
                    md:h-48 md:w-48 md:mb-0 md:mr-6'
          >
            {frontMatter.thumbnail ? (
              <Image alt={frontMatter.title} src={`/${frontMatter.thumbnail}`} layout='fill' objectPosition='center' objectFit='cover' />
            ) : (
              <div className='flex items-center justify-center bg-slate-500 h-full w-full'>
                <h3 className='text-white'>No Image</h3>
              </div>
            )}
          </div>
        </Link>
      </div>

      <div className='grow flex flex-col'>
        <Link href={`/blog/series/${frontMatter.series?.toLowerCase().replaceAll(' ', '-')}`} passHref>
          <div>
            <a className='text-sm font-medium cursor-pointer text-slate-600'>{frontMatter.series}</a>
          </div>
        </Link>

        <Link href={`/blog/${slug}`} passHref>
          <a className='flex'>
            <h2 className='max-h-14 md:max-h-16 overflow-hidden text-xl md:text-2xl font-medium mb-2 cursor-pointer hover:underline '>{frontMatter.title}</h2>
          </a>
        </Link>

        <div className='grow mb-4'>
          <p className='max-h-20 leading-relaxed overflow-hidden break-words'>{frontMatter.description}</p>
        </div>

        <div className='flex flex-wrap'>
          {frontMatter.tags.map((tag, i) => (
            <TagButton key={i} tag={tag} />
          ))}
        </div>

        <span className='text-sm'>{frontMatter.date}</span>
      </div>
    </article>
  );
};

export default PostItem;
