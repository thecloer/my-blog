import type { InfoSortFunc } from '@/types/data';
import { PAGINATION_LENGTH } from '@/config';

// common
const range = (start: number, end: number) => {
  const numList: number[] = [];
  if (start < end) {
    for (let i = start; i < end; i++) {
      numList.push(i);
    }
  }
  return numList;
};

export const titleToSlug = (title: string) => title.toLowerCase().replaceAll(' ', '-');

// sort
export const sortByDateDESC: InfoSortFunc = (a, b) => {
  return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
};

// pagination
export const generatePaginationNumbers = (currentPage: number, numPages: number) => {
  const gap = Math.floor(PAGINATION_LENGTH / 2);
  const gaps = { previous: Math.min(gap, currentPage - 1), next: Math.min(gap, numPages - currentPage) };
  const LENGTH = Math.min(PAGINATION_LENGTH - 1, numPages - 1);
  while (gaps.previous + gaps.next < LENGTH) {
    if (gaps.previous < gap) gaps.next++;
    else if (gaps.next < gap) gaps.previous++;
  }
  const paginationNumbers = range(currentPage - gaps.previous, currentPage + gaps.next + 1);

  return {
    paginationNumbers,
    isPreviousButton: numPages > PAGINATION_LENGTH && gaps.previous > gap - 1,
    isNextButton: numPages > PAGINATION_LENGTH && gaps.next > gap - 1,
  };
};
