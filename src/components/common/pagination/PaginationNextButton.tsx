import type { FC } from 'react';
import Link from 'next/link';

interface Props {
  num: number;
}

const PaginationNextButton: FC<Props> = ({ num }) => {
  return (
    <Link href={`/blog/page/${num}`} passHref>
      <a className='pagination-btn-color block py-2 px-3 leading-tight rounded-r-lg border'>
        <span className='sr-only'>Next</span>
        <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path>
        </svg>
      </a>
    </Link>
  );
};

export default PaginationNextButton;
