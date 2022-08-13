import type { PostInfo } from '@/types/data';
import { PAGINATION_LENGTH } from '@/config';

export const sortByDateDESC = (a: PostInfo, b: PostInfo) => {
  return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
};

const range = (start: number, end: number) => {
  const numList: number[] = [];
  if (start < end) {
    for (let i = start; i < end; i++) {
      numList.push(i);
    }
  }
  return numList;
};

export const paginationButtonIndex = (currentPage: number, numPages: number) => {
  const gap = Math.floor(PAGINATION_LENGTH / 2);
  const gaps = { previous: Math.min(gap, currentPage - 1), next: Math.min(gap, numPages - currentPage) };
  const LENGTH = Math.min(PAGINATION_LENGTH - 1, numPages - 1);
  while (gaps.previous + gaps.next < LENGTH) {
    if (gaps.previous < gap) gaps.next++;
    else if (gaps.next < gap) gaps.previous++;
  }

  return {
    beforePages: range(currentPage - gaps.previous, currentPage),
    afterPages: range(currentPage + 1, currentPage + gaps.next + 1),
    isPreviousButton: numPages > PAGINATION_LENGTH && gaps.previous > gap - 1,
    isNextButton: numPages > PAGINATION_LENGTH && gaps.next > gap - 1,
  };
};
