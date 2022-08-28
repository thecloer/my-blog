import type { FC } from 'react';

interface Props {
  text: string;
  className?: string;
}

const CommonButton: FC<Props> = ({ text, className }) => {
  return <button className={`text-xs px-2 py-1 mr-2 mb-2 rounded-md bg-blue-400 capitalize ${className}`}>{text}</button>;
};

export default CommonButton;
