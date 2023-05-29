import { ICreateJobRepository } from '../interfaces/create-job-repository.interface';
import { GenericError } from '../../../../../infra/api/errors/generic.error';
import { CreateJob } from '../models/create-job.model';
import { PgBossConnectionSingleton } from '../../../../../infra/database/connections/pgboss.connection';

export class CreateJobRepository implements ICreateJobRepository {
  constructor() { }


  async createJob(job: CreateJob): Promise<CreateJob> {
    const instance = await PgBossConnectionSingleton.getInstance();
    const id = await instance.createJob(job.props.jobName, job.props.data);

    if (id === null) throw new GenericError("Error to create job", "Anything is wrong with pgBoss connection", 500);

    return new CreateJob(job.props, id);
  }

}
