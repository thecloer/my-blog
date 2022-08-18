import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='flex min-h-20 items-center border-b-[1.25px]'>
      <div className='container-lg-62rem mx-auto flex items-center flex-col my-2 sm:my-0 sm:flex-row sm:justify-between'>
        <Link href='/' passHref>
          <a className='flex items-center mb-2 sm:mb-0'>
            <Image src='/images/logos/cloer-logo-indigo-512x512.png' layout='fixed' width='40' height='40' alt='blog logo' />
            <h1 className='ml-3 text-xl font-medium'>Seokgyu Choi</h1>
          </a>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
