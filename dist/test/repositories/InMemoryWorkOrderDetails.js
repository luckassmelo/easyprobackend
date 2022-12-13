"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryWorkOrderDetails = void 0;
class InMemoryWorkOrderDetails {
    constructor() {
        this.workOrderDetails = [];
    }
    async allWorkOrderDetails() {
        const workOrderDetails = this.workOrderDetails;
        return workOrderDetails;
    }
    async findMany(workOrders) {
        return null;
    }
}
exports.InMemoryWorkOrderDetails = InMemoryWorkOrderDetails;
//# sourceMappingURL=InMemoryWorkOrderDetails.js.map