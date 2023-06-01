import { GetDateOfTask } from "../models/get-date.model";
import { ResponseDateType } from "../types/response-date.type";

export interface IGetTaskDate {
    findDateById (id: GetDateOfTask): Promise<ResponseDateType>
}