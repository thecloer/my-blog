import type { InfoSortFunc } from '@/types/data';
import { MY_GITHUB_URL, PAGINATION_LENGTH } from '@/config';

// common
export const pageRange = (start: number, end: number) => {
  const numList: number[] = [];
  if (start < end) {
    for (let i = start; i <= end; i++) {
      numList.push(i);
    }
  }
  return numList;
};
export const generateSlug = (text: string) => encodeURIComponent(text.toLowerCase().replaceAll(' ', '-'));
export const releaseSlug = (text: string) => decodeURIComponent(text).replaceAll('-', ' ');

export const generateReadmeUrl = (repoSlug: string) => `https://raw.githubusercontent.com/thecloer/${repoSlug}/main/README.md`;
export const generateGithubUrl = (repoSlug: string) => `${MY_GITHUB_URL}/${repoSlug}`;
export const generateNpmUrl = (repoSlug: string) => `https://www.npmjs.com/package/${repoSlug}`;

// sort
export const sortByDateDESC: InfoSortFunc = (a, b) => {
  return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
};

// pagination
export const generatePaginationNumbers = (currentPage: number, numPages: number) => {
  const gap = Math.floor(PAGINATION_LENGTH / 2);
  const gaps = { previous: Math.min(gap, currentPage - 1), next: Math.min(gap, numPages - currentPage) };
  const GAP_LENGTH = Math.min(PAGINATION_LENGTH - 1, numPages - 1);
  while (gaps.previous + gaps.next < GAP_LENGTH) {
    if (gaps.previous < gap) gaps.next++;
    else if (gaps.next < gap) gaps.previous++;
  }
  const paginationNumbers = pageRange(currentPage - gaps.previous, currentPage + gaps.next);

  return {
    paginationNumbers,
    isPreviousButton: numPages > PAGINATION_LENGTH && gaps.previous > gap - 1,
    isNextButton: numPages > PAGINATION_LENGTH && gaps.next > gap - 1,
  };
};
