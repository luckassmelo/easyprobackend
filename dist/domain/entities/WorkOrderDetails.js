"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkOrderDetails = void 0;
const Entity_1 = require("../../core/domain/Entity");
class WorkOrderDetails extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static convertArrayToObject(workOrders) {
        const workOrdersObject = {};
        for (const workOrder of workOrders) {
            let workOrderNumber = String(workOrder.ORDER_NO).split(',')[0];
            workOrdersObject[workOrderNumber] = workOrder;
        }
        return workOrdersObject;
    }
}
exports.WorkOrderDetails = WorkOrderDetails;
//# sourceMappingURL=WorkOrderDetails.js.map