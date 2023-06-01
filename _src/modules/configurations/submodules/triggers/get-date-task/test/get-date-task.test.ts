import {GetTaskDateController} from '../controller/get-task-date.controller';
import { GetDateOfTaskRepository } from '../repository/get-task-date.repository';
import { GetTaskDateUseCase } from '../usecases/get-task-date.usecase';
import {connectionProductionManager} from '../../../../../../../src/infra/database/index';
import { GetDateOfTask } from '../models/get-date.model';
import { ParameterNotFoundError } from '../../../../../../infra/api/errors/parameter-not-found.error';
import { CustomError } from '../../../../../../domain/errors/custom.error';

afterAll(async() =>{
    await connectionProductionManager.close();
})
describe('Unit tests for get the last date of task', ()=>{
    const getDateTaskRepository =  new GetDateOfTaskRepository(connectionProductionManager);
    const getDateTaskUseCase = new GetTaskDateUseCase(getDateTaskRepository);
    const getDateTaskController = new GetTaskDateController(getDateTaskUseCase);
    const TIMEOUT_IN_MILLISECONDS = 10000;

    test('should return the last date of task', async ()=>{
        const dateReturned =  await getDateTaskUseCase.execute(new GetDateOfTask({
            id: '2'
        }));

        expect(dateReturned).not.toBeNull();
    }, TIMEOUT_IN_MILLISECONDS);

    test('should return an error when id is not providade', async() =>{
        try{
            await getDateTaskController.handle({
                id: ''
            });
            fail('Expected an error to be thrown');
        } catch(error){
            expect(error).toBeInstanceOf(CustomError);
            expect(error.message).toBe('Parameter id not found')
        }
        
    }, TIMEOUT_IN_MILLISECONDS);
})