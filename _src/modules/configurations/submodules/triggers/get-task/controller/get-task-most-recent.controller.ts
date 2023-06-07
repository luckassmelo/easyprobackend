import { GetTaskDateUseCase } from "../usecases/get-task-most-recent.usecase";
import {Controller} from '../../../../../../presentation/protocols/controller';
import { HttpResponse } from "../../../../../../presentation/protocols/http";
import {  GetTriggerTask} from "../models/get-task-most-recent.model";

type RequestProps = {
    idTrigger: number
    idOee: number
}

export class GetTaskDateController implements Controller{
    constructor(private usecase: GetTaskDateUseCase){}

    async handle (request: RequestProps): Promise<HttpResponse>{
        const { idTrigger, idOee }  = request;
        
        const getTriggerTask = new GetTriggerTask()
        getTriggerTask.idTrigger = Number(idTrigger);
        getTriggerTask.idOee = Number(idOee);
        
        const getDate =  await this.usecase.execute(getTriggerTask);
        
            
        return {
            statusCode: 200,
            response: getDate
        };
    };
}