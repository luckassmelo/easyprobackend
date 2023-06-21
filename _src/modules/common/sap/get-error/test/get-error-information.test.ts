import { InMemoryRepositoryGetError } from "./memory-repository"
import { GetError } from "../models/get-error.model";



describe('Test for get error into log' , ()=>{
    let InMemoryRepository: InMemoryRepositoryGetError

    beforeAll(()=>{
        InMemoryRepository =  new InMemoryRepositoryGetError();
    });

    it('Should return property name if idReq exist', async ()=>{
        const id =  "77038" 
        const mockData = [
            {
                info_log : { idReq :"77038", statusCode :404, name :"Material 00000000006313662A não está atualizado no centro 3600", errorProps :{ data :{ MATERIAL :"00000000006313662A", PLANT :"3600", STGE_LOC :"0603", ENTRY_QNT :1, ENTRY_UOM :"ST", MOVE_TYPE :"201", COSTCENTER :"C122222805", BATCH :"", ORDERID :""}}}
            },
            {
                info_log : { idReq :"77038", statusCode :404, name :"Material 00000000006313662A não está atualizado no centro 3600", errorProps :{ data :{ MATERIAL :"00000000006313662A", PLANT :"3600", STGE_LOC :"0603", ENTRY_QNT :1, ENTRY_UOM :"ST", MOVE_TYPE :"201", COSTCENTER :"C122222805", BATCH :"", ORDERID :""}}}
            },
            {
                info_log : { idReq :"77038", statusCode :404, name :"Material 00000000006313662A não está atualizado no centro 3600", errorProps :{ data :{ MATERIAL :"00000000006313662A", PLANT :"3600", STGE_LOC :"0603", ENTRY_QNT :1, ENTRY_UOM :"ST", MOVE_TYPE :"201", COSTCENTER :"C122222805", BATCH :"", ORDERID :""}}}
            }
        ]
        const initialItem = new GetError({id});
        InMemoryRepository['logs'].push(...mockData);

        const result = await InMemoryRepository.findError(initialItem);
        const expectedName = "Material 00000000006313662A não está atualizado no centro 3600"
        
        expect(result).toBe(expectedName)
    }
    
    )
})