import { Entity } from "../../core/domain/Entity";
import { WorkOrderDetailsProps, WorkOrderMap } from "../../core/types/index";


export class WorkOrderDetails extends Entity<WorkOrderDetailsProps> {
    constructor(props: WorkOrderDetailsProps, id?: number) {
        super(props, id);
    }

    static convertArrayToObject(workOrders: Array<WorkOrderDetailsProps>): WorkOrderMap {
        const workOrdersObject: WorkOrderMap = {};

        for(const workOrder of workOrders){
            let workOrderNumber: string = String(workOrder.ORDER_NO).split(',')[0];
            workOrdersObject[workOrderNumber] = workOrder;
        }
        
        return workOrdersObject;
    }
}