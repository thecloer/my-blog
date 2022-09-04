import Link from 'next/link';

const Nav = () => {
  const navList = ['about', 'project', 'blog', 'resume'];
  return (
    <nav className='flex flex-wrap justify-center gap-x-5'>
      {navList.map((text, i) => (
        <Link href={`/${text}`} passHref key={i}>
          <a className='cursor-pointer text-slate-500 hover:text-slate-700 transition-colors capitalize'>{text}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
