import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='flex min-h-20 items-center border-b-[1.25px] py-2'>
      <div className='container-lg-62rem mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-y-2'>
        <Link href='/' passHref>
          <a className='flex items-center gap-x-3 '>
            <Image src='/images/logos/cloer-logo-indigo-512x512.png' layout='fixed' width='40' height='40' alt='blog logo' />
            <h1 className='text-xl font-medium'>Seokgyu Choi</h1>
          </a>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
