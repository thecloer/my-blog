import type { FC } from 'react';
import Link from 'next/link';

interface Props {
  tag: string;
  className?: string;
}

const TagButton: FC<Props> = ({ tag, className = '' }) => {
  return (
    <Link href={`/blog/tag/${tag.toLowerCase()}`} passHref>
      <button className={`text-xs px-2 py-1 mr-2 mb-2 rounded-md bg-blue-400 ${className}`}>
        <a>{tag}</a>
      </button>
    </Link>
  );
};

export default TagButton;
