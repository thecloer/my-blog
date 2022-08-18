import type { FC } from 'react';
import type { Info } from '@/types/data';
import { DATA_SOURCE } from '@/config';
import PostItem from './PostItem';

interface Props {
  postInfos: Info<typeof DATA_SOURCE.blog>[];
}

const PostList: FC<Props> = ({ postInfos }) => {
  return (
    <section className='-my-8 divide-y-2 divide-gray-100'>
      {postInfos.map((post, i) => (
        <PostItem key={i} postInfo={post} />
      ))}
    </section>
  );
};

export default PostList;
