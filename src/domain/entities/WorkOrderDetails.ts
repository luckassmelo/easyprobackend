import { Entity } from "../../core/domain/Entity";
import { WorkOrderDetailsProps } from "../../core/types/index";

interface WorkOrderMap {
    [key: string]: Object;
}

export class WorkOrderDetails extends Entity<WorkOrderDetailsProps> {
    constructor(props: WorkOrderDetailsProps, id?: number) {
        super(props, id);
    }

    static convertArrayToObject(workOrders: Array<WorkOrderDetailsProps>): any {
        const workOrdersObject: WorkOrderMap = {};

        for(const workOrder of workOrders){
            let workOrderNumber: string = String(workOrder.ORDER_NO).split(',')[0];
            workOrdersObject[workOrderNumber] = workOrder;
        }
        
        return workOrdersObject;
    }
}