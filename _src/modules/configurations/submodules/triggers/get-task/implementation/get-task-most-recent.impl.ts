import {GetTaskDateController} from '../controller/get-task-most-recent.controller';
import { GetDateOfTaskRepository } from '../repository/get-task-most-recent.repository';
import { GetTaskDateUseCase } from '../usecases/get-task-most-recent.usecase';
import {connectionProductionManager} from '../../../../../../../src/infra/database/index';



const getDateTaskRepository =  new GetDateOfTaskRepository(connectionProductionManager);
const getDateTaskUseCase = new GetTaskDateUseCase(getDateTaskRepository);
const getDateTaskController = new GetTaskDateController(getDateTaskUseCase);


export {getDateTaskController}