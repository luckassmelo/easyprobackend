import { connectionProductionManager } from "../../../../../src/infra/database/index";
import { GetEasyPROParameterController } from '../controllers/get-easypro-parameter.controller';
import { GetEasyPROParameterRepository } from '../repository/get-easypro-parameter.repository';
import { GetEasyPROParameterUseCase } from '../usecases/get-easypro-parameter.usecase';

const getEasyPropParameterRepository = new GetEasyPROParameterRepository(connectionProductionManager);

const getEasyPROParameterUseCase = new GetEasyPROParameterUseCase(getEasyPropParameterRepository);

const getEasyROParameterController = new GetEasyPROParameterController(getEasyPROParameterUseCase);

export { getEasyROParameterController };

