import type { FC } from 'react';
import { type IconName, ICONS } from '@/lib/icons';
import Image from 'next/image';

interface Props {
  iconName: IconName;
  addText?: boolean;
}

const IconButton: FC<Props> = ({ iconName, addText = false }) => {
  const icon = ICONS.find((icon) => icon.name === iconName)!;
  return (
    <button className='text-xs px-2 py-1 mr-2 mb-2 rounded-md bg-indigo-200 flex items-center transition-shadow hover:shadow-none shadow-lg'>
      <Image alt={`${icon.name} logo`} src={icon.link} width='20' height='20' className='rounded-sm' />
      {addText && <span className='ml-1 font-medium'>{icon.name}</span>}
    </button>
  );
};

export default IconButton;
