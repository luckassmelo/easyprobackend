import { LogModel } from '../model/log.model';

export interface ICreateLogRepository {
  save(log: LogModel): Promise<void>;
}
