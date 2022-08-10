import Link from 'next/link';
import { FC } from 'react';

interface Props {
  text: string;
}

const NavButton: FC<Props> = ({ text }) => {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  return (
    <Link href={`/${text}`} passHref>
      <a className='ml-5 cursor-pointer text-slate-500 hover:text-slate-700 transition-colors'>{capitalizedText}</a>
    </Link>
  );
};

export default NavButton;
