import type { FC } from 'react';
import Link from 'next/link';
import { titleToSlug } from '@/utils';

interface Props {
  tag: string;
  className?: string;
}

const TagButton: FC<Props> = ({ tag, className = '' }) => {
  return (
    <Link href={`/blog/tag/${titleToSlug(tag)}`} passHref>
      <button className={`text-xs px-2 py-1 mr-2 mb-2 rounded-md bg-blue-400 ${className}`}>
        <a>{tag}</a>
      </button>
    </Link>
  );
};

export default TagButton;
