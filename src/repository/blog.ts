import { DATA_SOURCE } from '@/config';
import { DataRepository } from '@/repository/dataRepository';

export class Blog extends DataRepository<typeof DATA_SOURCE.blog> {
  private static _instance: Blog;
  private constructor() {
    super(DATA_SOURCE.blog);
  }
  static get instance() {
    return this._instance ?? (this._instance = new this());
  }
}
