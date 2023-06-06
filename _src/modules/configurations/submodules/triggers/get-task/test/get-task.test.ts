import { GetTriggerTask } from '../models/get-task.model';



describe('Unit tests for get the last date of task', ()=>{
    const TIMEOUT_IN_MILLISECONDS = 10000;
    test('should return an error when id is not providade', async() =>{
        try{
            const getTaskModel =  new GetTriggerTask();
            getTaskModel.idTrigger = 1.3

        } catch(error){
            expect(error.message).toBe('Parameter idTrigger is wrong type. Should be integer.')
        };
        
    }, TIMEOUT_IN_MILLISECONDS);
})