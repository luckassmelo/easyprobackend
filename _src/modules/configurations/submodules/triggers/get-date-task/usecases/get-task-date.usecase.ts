import { IGetTaskDate } from "../interface/get-task-date.interface";
import { GetDateOfTask } from "../models/get-date.model";
import { ResponseDateType } from "../types/response-date.type";

export class GetTaskDateUseCase {
    constructor(private repository: IGetTaskDate){}

    async execute(parameter: GetDateOfTask): Promise<ResponseDateType>{
        
        return await this.repository.findDateById(parameter)
    }
}