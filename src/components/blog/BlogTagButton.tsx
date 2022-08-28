import type { FC } from 'react';
import Link from 'next/link';
import { generateSlug } from '@/utils';
import CommonButton from '@/components/common/buttons/CommonButton';

interface Props {
  tag: string;
  className?: string;
}

const BlogTagButton: FC<Props> = ({ tag, className = '' }) => {
  return (
    <Link href={`/blog/search/tag/${generateSlug(tag)}`} passHref>
      <a>
        <CommonButton text={tag} className={className} />
      </a>
    </Link>
  );
};

export default BlogTagButton;
