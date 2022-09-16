import { MY_GITHUB_URL, MY_INSTAGRAM_URL, MY_LINKEDIN_URL } from '@/config';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex min-h-20 items-center bg-slate-300 py-2'>
      <div className='container-lg-62rem mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-y-2'>
        <div className='flex items-baseline flex-wrap justify-center gap-x-3'>
          <Link href='/' passHref>
            <a>
              <span className='text-xl font-medium'>Seokgyu Choi</span>
            </a>
          </Link>
          <a href={MY_GITHUB_URL} target='_blank' rel='noopener noreferrer author' className='text-sm text-slate-600'>
            &copy;cloer-Choi
          </a>
        </div>
        <div className='flex gap-x-3'>
          <a href={MY_GITHUB_URL} target='_blank' rel='noreferrer'>
            <svg fill='currentColor' className='bi bi-github' width='20' height='20' viewBox='0 0 16 16'>
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
          </a>
          <a href={MY_INSTAGRAM_URL} target='_blank' rel='noreferrer'>
            <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' width='20' height='20' viewBox='0 0 24 24'>
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
            </svg>
          </a>
          <a href={MY_LINKEDIN_URL} target='_blank' rel='noreferrer'>
            <svg fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0' width='20' height='20' viewBox='0 0 24 24'>
              <path stroke='none' d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
              <circle cx='4' cy='4' r='2' stroke='none'></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
