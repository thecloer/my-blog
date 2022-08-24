import type { FC } from 'react';
import { generatePaginationNumbers } from '@/utils';
import PaginationButton from './PaginationButton';

interface Props {
  currentPage: number;
  numPages: number;
}
const Pagination: FC<Props> = ({ currentPage, numPages }) => {
  const { paginationNumbers, isPreviousButton, isNextButton } = generatePaginationNumbers(currentPage, numPages);

  return (
    <nav aria-label='Page navigation' className='mt-12 w-full flex justify-center cursor-pointer'>
      <ul className='flex items-center -space-x-0'>
        {paginationNumbers.map((pageNum, i) => (
          <PaginationButton
            key={i}
            pageNum={pageNum}
            type={i === 0 && isPreviousButton ? 'Previous' : i === paginationNumbers.length - 1 && isNextButton ? 'Next' : pageNum === currentPage ? 'current' : 'nomal'}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
