import { IGetTaskDate } from "../interface/get-task-most-recent.interface";
import {  GetTriggerTask } from "../models/get-task-most-recent.model";


export class GetTaskDateUseCase {
    constructor(private repository: IGetTaskDate){}

    async execute(parameter:  GetTriggerTask): Promise< GetTriggerTask>{
        
        return await this.repository.findDateById(parameter)
    }
}