import { ParameterNotFoundError } from '../../../../../infra/api/errors/parameter-not-found.error';
import { Controller } from '../../../../../presentation/protocols/controller'
import { HttpResponse } from '../../../../../presentation/protocols/http';
import { CreateJob } from '../models/create-job.model';
import { CreateJobUseCase } from '../usecase/create-job.usecase';

type JobProps = {
  jobName: string;
  data: any;
}


export class CreateJobController implements Controller {
  constructor(private usecase: CreateJobUseCase) { }

  async handle(request: JobProps): Promise<HttpResponse> {
    const { jobName, data } = request;

    if (!jobName) throw new ParameterNotFoundError('jobName');
    if (!data) throw new ParameterNotFoundError('data');

    const job = await this.usecase.execute(new CreateJob({
      jobName,
      data
    }));

    return {
      statusCode: 200,
      response: job
    }
  }

}
