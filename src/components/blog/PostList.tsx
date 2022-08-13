import type { FC } from 'react';
import type { PostInfo } from '@/types/data';
import PostItem from './PostItem';

interface Props {
  posts: PostInfo[];
}
const PostList: FC<Props> = ({ posts }) => {
  return (
    <section className='-my-8 divide-y-2 divide-gray-100'>
      {posts.map((post, i) => (
        <PostItem key={i} postInfo={post} />
      ))}
    </section>
  );
};

export default PostList;
