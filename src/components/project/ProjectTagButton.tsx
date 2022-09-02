import type { FC } from 'react';
import Link from 'next/link';
import { generateSlug } from '@/utils';
import CommonButton from '@/components/common/buttons/CommonButton';

interface Props {
  tag: string;
  className?: string;
}

const ProjectTagButton: FC<Props> = ({ tag, className = '' }) => {
  return (
    <Link href={`/project/search/tag/${generateSlug(tag)}`} passHref>
      <a>
        <CommonButton text={tag} className={className} />
      </a>
    </Link>
  );
};

export default ProjectTagButton;
