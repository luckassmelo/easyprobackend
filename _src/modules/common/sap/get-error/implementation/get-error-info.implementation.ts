import {connectionProductionManager} from '../../../../../../src/infra/database/index'
import { GetErrorUseCase } from '../usecases/get-error-information.use-case'
import { GetErrorController } from '../controller/get-error.controller'
import { GetErrorByIdRepository } from '../repository/get-error-by-id.repository'

const getErrorRepository = new GetErrorByIdRepository(connectionProductionManager);
const getErrorInfoUseCase =  new GetErrorUseCase(getErrorRepository);
const getErrorInfoController = new GetErrorController(getErrorInfoUseCase);

export { getErrorInfoController }