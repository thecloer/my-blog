import { DATA_SOURCE } from '@/config';

export type DataType = keyof typeof DATA_SOURCE;

export type FrontMatter<T extends DataType> = {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  tags: string[] | null;
} & (T extends 'blog'
  ? {
      series: string | null;
    }
  : {
      githubRepoSlug: string;
      npm?: boolean;
    });

export type Info<T extends DataType> = {
  slug: string;
  frontMatter: FrontMatter<T>;
};

export type InfoSortFunc = <T extends DataType>(a: Info<T>, b: Info<T>) => number;
