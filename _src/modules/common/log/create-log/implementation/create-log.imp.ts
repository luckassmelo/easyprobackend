import { connectionProductionManager } from "../../../../../../src/infra/database/index";
import { CreateLogController } from '../controller/create-log.controller';
import { CreateLogRepository } from '../repository/create-log.repository';
import { CreateLogUseCase } from '../usecase/create-log.usecase';


const createLogRepository = new CreateLogRepository(connectionProductionManager);
const createLogUseCase = new CreateLogUseCase(createLogRepository);
const createLogController = new CreateLogController(createLogUseCase);


export { createLogController };
