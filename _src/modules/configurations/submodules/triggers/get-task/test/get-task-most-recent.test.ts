import { GetTriggerTask } from '../models/get-task-most-recent.model';



describe('Unit tests for get the last date of task', ()=>{
    const TIMEOUT_IN_MILLISECONDS = 10000;
    test('should return an error when idTrigger has wrong type', async() =>{
        try{
            const getTaskModel =  new GetTriggerTask();
            getTaskModel.idTrigger = 1.3

        } catch(error){
            expect(error.message).toBe('Parameter idTrigger is wrong type. Should be integer.')
        };
        
    }, TIMEOUT_IN_MILLISECONDS);


    test('should return an error when idOee has wrong type', async() =>{
        try{
            const getTaskModel =  new GetTriggerTask();
            getTaskModel.idOee = 4.245
        }catch(error){
            expect(error.message).toBe('Parameter idOee is wrong type. Should be integer.')
        }
    })
})