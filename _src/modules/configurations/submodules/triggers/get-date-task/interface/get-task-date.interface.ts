import {  GetTriggerTask } from "../models/get-date.model";

export interface IGetTaskDate {
    findDateById (id:  GetTriggerTask): Promise< GetTriggerTask>
}