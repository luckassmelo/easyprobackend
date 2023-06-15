import {  GetTriggerTask } from "../models/get-task-most-recent.model";

export interface IGetTaskDate {
    findDateById (id:  GetTriggerTask): Promise< GetTriggerTask>
}