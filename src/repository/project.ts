import { DATA_SOURCE } from '@/config';
import { DataRepository } from '@/repository/dataRepository';

export class Project extends DataRepository<typeof DATA_SOURCE.project> {
  private static _instance: Project;
  private constructor() {
    super(DATA_SOURCE.project);
  }
  static get instance() {
    return this._instance ?? (this._instance = new this());
  }
}
