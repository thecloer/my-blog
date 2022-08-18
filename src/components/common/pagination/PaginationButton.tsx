import type { FC } from 'react';
import Link from 'next/link';

interface Props {
  type: 'current' | 'nomal' | 'Previous' | 'Next';
  pageNum: number;
}

const PaginationButton: FC<Props> = ({ type, pageNum }) => {
  return (
    <Link href={`/blog/page/${pageNum}`} passHref>
      <li>
        {type === 'current' ? (
          <a className='z-10 py-2 px-3 leading-tight border bg-gray-200 text-gray-700 border-gray-300'>{pageNum}</a>
        ) : type === 'nomal' ? (
          <a className='pagination-btn-color py-2 px-3 leading-tight border'>{pageNum}</a>
        ) : (
          <a className={`pagination-btn-color block py-2 px-3 leading-tight rounded-${type === 'Previous' ? 'l' : 'r'}-lg border`}>
            <span className='sr-only'>{type}</span>
            <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              {type === 'Previous' ? (
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                ></path>
              ) : (
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              )}
            </svg>
          </a>
        )}
      </li>
    </Link>
  );
};

export default PaginationButton;
