export type PostFrontMatter = {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  series: string | null;
  tags: string[];
};

export type PostInfo = {
  slug: string;
  frontMatter: PostFrontMatter;
};
