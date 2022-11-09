import { WorkOrderDetailsProps } from "../../core/types/index";
import { WorkOrderDetails } from "../../domain/entities/WorkOrderDetails";


export interface IWorkOrderDetailsRepository {
    allWorkOrderDetails(): Promise<WorkOrderDetails[] | null>;
    findMany(workOrders: Array<string>): Promise<WorkOrderDetailsProps[] | null>;
}