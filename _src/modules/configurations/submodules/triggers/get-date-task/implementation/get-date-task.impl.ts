import {GetTaskDateController} from '../controller/get-task-date.controller';
import { GetDateOfTaskRepository } from '../repository/get-task-date.repository';
import { GetTaskDateUseCase } from '../usecases/get-task-date.usecase';
import {connectionProductionManager} from '../../../../../../../src/infra/database/index';



const getDateTaskRepository =  new GetDateOfTaskRepository(connectionProductionManager);
const getDateTaskUseCase = new GetTaskDateUseCase(getDateTaskRepository);
const getDateTaskController = new GetTaskDateController(getDateTaskUseCase);


export {getDateTaskController}