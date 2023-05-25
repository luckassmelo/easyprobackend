import { ICreateJobRepository } from '../interfaces/create-job-repository.interface';
import { CreateJob } from '../models/create-job.model';

export class CreateJobUseCase {
  constructor(private createJobUseCase: ICreateJobRepository) { }

  async execute(job: CreateJob): Promise<CreateJob> {
    return await this.createJobUseCase.createJob(job);
  }

}
