import Head from 'next/head';
import type { FC, PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <base target='_blank' />
      </Head>

      <div className='flex flex-col min-h-screen'>
        <Header />
        <div className='grow basis-1'>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
