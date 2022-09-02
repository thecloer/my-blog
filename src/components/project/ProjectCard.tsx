import type { FC } from 'react';
import type { FrontMatter } from '@/types/data';
import Link from 'next/link';
import Image from 'next/image';
import ProjectTagButton from './ProjectTagButton';

interface Props {
  project: FrontMatter<'project'>;
}

const ProjectCard: FC<Props> = ({ project: { title, description, date, githubRepoSlug, tags, thumbnail } }) => {
  return (
    <div
      className='h-[26rem]
                  border-2 rounded-xl overflow-hidden shadow-md
                  transition duration-300 hover:scale-105 hover:shadow-lg'
    >
      <Link href={`/project/${githubRepoSlug}`} passHref>
        <div className='h-52 flex items-center justify-center bg-slate-500 relative cursor-pointer'>
          {thumbnail ? <Image alt={title} src={`/${thumbnail}`} layout='fill' objectPosition='center' objectFit='cover' /> : <h3 className='text-white'>No Image</h3>}
        </div>
      </Link>
      <div className='h-52 px-5 py-3 flex flex-col break-words'>
        <Link href={`/project/${githubRepoSlug}`} passHref>
          <a className='cursor-pointer'>
            <h1 className='text-lg font-bold mb-2 max-h-14 overflow-hidden'>{title}</h1>
          </a>
        </Link>
        <div className='grow'>
          <p className='max-h-[4.5rem] text-base font-normal overflow-hidden'>{description}</p>
        </div>
        <div className='mb-1'>{tags && tags.map((tag, i) => <ProjectTagButton key={i} tag={tag} />)}</div>
        <span className='text-sm text-gray-500'>{date}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
