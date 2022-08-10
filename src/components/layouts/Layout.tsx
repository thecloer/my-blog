import type { FC, PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>
        <div className='container mx-auto'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
