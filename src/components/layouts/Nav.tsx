import Link from 'next/link';
import NavButton from './NavButton';

const Nav = () => {
  const navList = ['portfolio', 'projects', 'blog', 'resume'];
  return (
    <nav className='flex'>
      {navList.map((navText, i) => (
        <NavButton text={navText} key={i} />
      ))}
    </nav>
  );
};

export default Nav;
