import { CreateJob } from '../models/create-job.model';

export interface ICreateJobRepository {
  createJob: (job: CreateJob) => Promise<CreateJob>;
}
