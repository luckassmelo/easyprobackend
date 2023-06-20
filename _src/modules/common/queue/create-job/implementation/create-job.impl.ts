import { CreateJobController } from '../controller/create-job.controller';
import { CreateJobRepository } from '../repository/create-job.repository';
import { CreateJobUseCase } from '../usecase/create-job.usecase';

const createJobRepository = new CreateJobRepository();
const createJobUseCase = new CreateJobUseCase(createJobRepository);
const createJobController = new CreateJobController(createJobUseCase);


export { createJobController };
