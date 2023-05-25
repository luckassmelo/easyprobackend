import { PgBossAdapter, pgBossConnection } from '../../../../../infra/pgboss/adapter/pgboss.adapter';
import { ICreateJobRepository } from '../interfaces/create-job-repository.interface';
import { GenericError } from '../../../../../infra/api/errors/generic.error';
import { CreateJob } from '../models/create-job.model';

export class CreateJobRepository implements ICreateJobRepository {
  constructor(private adapter: PgBossAdapter) { }


  async createJob(job: CreateJob): Promise<CreateJob> {
    await pgBossConnection.start();
    const id = await this.adapter.createJob(job.props.jobName, job.props.data);

    if (id === null) throw new GenericError("Error to create job", "Anything is wrong with pgBoss connection", 500);
    await pgBossConnection.close();

    return new CreateJob(job.props, id);
  }

}
