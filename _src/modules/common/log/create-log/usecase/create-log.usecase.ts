import { LogModel } from '../model/log.model';
import { CreateLogRepository } from '../repository/create-log.repository';

export class CreateLogUseCase {

  constructor(private repository: CreateLogRepository) { }

  async execute(log: LogModel): Promise<void> {
    return await this.repository.save(log);
  }

}
