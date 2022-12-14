import { DATA_SOURCE } from '@/config';
import { DataRepository } from '@/repository/dataRepository';

export class Blog extends DataRepository<typeof DATA_SOURCE.blog> {
  private static _instance: Blog;
  private constructor() {
    super(DATA_SOURCE.blog);

    const infos = this.getInfos();
    const serieswithNull = infos.map((info) => info.frontMatter.series);
    const seriesSet = new Set(serieswithNull);
    if (seriesSet.has(null)) seriesSet.delete(null);
    this.uniqueSeries = [...seriesSet] as string[];

    const tagsWithNull = infos.flatMap((info) => info.frontMatter.tags);
    const tagsSet = new Set(tagsWithNull);
    if (tagsSet.has(null)) tagsSet.delete(null);
    this.uniqueTags = [...tagsSet] as string[];

    this.postNum = this.fileNames.length;
  }
  static get instance() {
    return this._instance ?? (this._instance = new this());
  }

  readonly uniqueSeries: string[];
  readonly uniqueTags: string[];
  readonly postNum: number;

  search(query: string) {
    const infos = this.getInfos();
    const searchProperties = ['title', 'description'] as const;
    const result = infos.filter(({ frontMatter }) => searchProperties.some((key) => frontMatter[key].toLowerCase().includes(query.toLocaleLowerCase())));
    return result;
  }
}
