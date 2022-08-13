import type { FC } from 'react';
import { paginationButtonIndex } from '@/utils';
import PaginationButton from './PaginationButton';
import PaginationNextButton from './PaginationNextButton';
import PaginationPreviousButton from './PaginationPreviousButton';

interface Props {
  currentPage: number;
  numPages: number;
}
const Pagination: FC<Props> = ({ currentPage, numPages }) => {
  const { beforePages, afterPages, isPreviousButton, isNextButton } = paginationButtonIndex(currentPage, numPages);

  return (
    <nav aria-label='Page navigation' className='mt-12 w-full flex justify-center'>
      <ul className='flex items-center -space-x-0'>
        {beforePages.map((pageNum, i) => (
          <li key={i}>{i === 0 && isPreviousButton ? <PaginationPreviousButton num={pageNum} /> : <PaginationButton num={pageNum} />}</li>
        ))}
        <li>
          <a className='z-10 py-2 px-3 leading-tight border bg-gray-200 text-gray-700 border-gray-300'>{currentPage}</a>
        </li>
        {afterPages.map((pageNum, i, arr) => (
          <li key={i}>{i === arr.length - 1 && isNextButton ? <PaginationNextButton num={pageNum} /> : <PaginationButton num={pageNum} />}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
