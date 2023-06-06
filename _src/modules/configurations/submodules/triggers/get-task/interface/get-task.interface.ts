import {  GetTriggerTask } from "../models/get-task.model";

export interface IGetTaskDate {
    findDateById (id:  GetTriggerTask): Promise< GetTriggerTask>
}