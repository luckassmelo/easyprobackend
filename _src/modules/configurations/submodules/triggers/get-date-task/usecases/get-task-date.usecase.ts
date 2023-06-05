import { IGetTaskDate } from "../interface/get-task-date.interface";
import {  GetTriggerTask } from "../models/get-date.model";
import { ResponseDateType } from "../types/response-date.type";

export class GetTaskDateUseCase {
    constructor(private repository: IGetTaskDate){}

    async execute(parameter:  GetTriggerTask): Promise< GetTriggerTask>{
        
        return await this.repository.findDateById( parameter)
    }
}