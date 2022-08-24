import type { FC } from 'react';
import Link from 'next/link';
import { generateSlug } from '@/utils';

interface Props {
  text: string;
}

const NavButton: FC<Props> = ({ text }) => {
  return (
    <Link href={`/${generateSlug(text)}`} passHref>
      <a className='ml-5 cursor-pointer text-slate-500 hover:text-slate-700 transition-colors capitalize'>{text}</a>
    </Link>
  );
};

export default NavButton;
