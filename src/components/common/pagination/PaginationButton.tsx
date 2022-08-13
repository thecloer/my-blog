import type { FC } from 'react';
import Link from 'next/link';

interface Props {
  num: number;
}

const PaginationButton: FC<Props> = ({ num }) => {
  return (
    <Link href={`/blog/page/${num}`} passHref>
      <a className='pagination-btn-color py-2 px-3 leading-tight border'>{num}</a>
    </Link>
  );
};

export default PaginationButton;
