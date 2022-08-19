import type { NextPage } from 'next';
import type { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';

interface Props {
  uniqueSeries: string[];
  uniqueTags: string[];
}

const BlogLayout: NextPage<PropsWithChildren<Props>> = ({ children, uniqueSeries, uniqueTags }) => {
  return (
    <div className='container-lg-62rem mx-auto px-8 md:px-0'>
      <div className='flex py-24'>
        <main className='md:w-2/3'>{children}</main>

        <div className='w-1/3 hidden md:block'>
          <Sidebar uniqueSeries={uniqueSeries} uniqueTags={uniqueTags} />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
