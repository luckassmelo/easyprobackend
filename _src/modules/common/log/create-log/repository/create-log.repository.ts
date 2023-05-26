import { ICreateLogRepository } from '../interface/create-log-repository.interface';
import { LogModel } from '../model/log.model';
import PostgresSQLAdapter from '../../../../../../src/infra/database/PostgreSQLAdapter';

export class CreateLogRepository implements ICreateLogRepository {

  constructor(private adapter: PostgresSQLAdapter) { }

  async save(log: LogModel): Promise<void> {
    return await this.adapter.connection('general.tbl_logs').insert({
      process_name: log.processName,
      info_log: log.infoLog,
    });
  }
}
