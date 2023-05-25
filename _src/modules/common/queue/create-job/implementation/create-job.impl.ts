import { pgBossConnection } from '../../../../../infra/pgboss/adapter/pgboss.adapter';
import { CreateJobController } from '../controller/create-job.controller';
import { CreateJobRepository } from '../repository/create-job.repository';
import { CreateJobUseCase } from '../usecase/create-job.usecase';

const createJobRepository = new CreateJobRepository(pgBossConnection);
const createJobUseCase = new CreateJobUseCase(createJobRepository);
const createJobController = new CreateJobController(createJobUseCase);


export { createJobController };
