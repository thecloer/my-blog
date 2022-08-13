import type { FC, PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
