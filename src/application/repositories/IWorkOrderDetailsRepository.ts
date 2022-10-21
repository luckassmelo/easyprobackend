import { WorkOrderDetails } from "../../domain/entities/WorkOrderDetails";


export interface IWorkOrderDetailsRepository {
    allWorkOrderDetails(): Promise<WorkOrderDetails[]>;
}