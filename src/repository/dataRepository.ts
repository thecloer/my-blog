import type { DataType, FrontMatter, InfoSortFunc } from '@/types/data';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { sortByDateDESC } from '@/utils';

export abstract class DataRepository<T extends DataType> {
  readonly fileNames: string[];
  protected readonly _path: string;
  constructor(private readonly source: T) {
    this._path = join('data', source);
    this.fileNames = readdirSync(this._path);
  }

  getData(fileName: string) {
    const { data, content } = matter(readFileSync(join(this._path, fileName), 'utf-8'));
    const frontMatter = data as FrontMatter<T>;
    return { frontMatter, content };
  }

  getInfos(sortFunction: InfoSortFunc = sortByDateDESC) {
    const posts = this.fileNames.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const { frontMatter } = this.getData(fileName);
      return { slug, frontMatter };
    });

    return posts.sort(sortFunction);
  }
}