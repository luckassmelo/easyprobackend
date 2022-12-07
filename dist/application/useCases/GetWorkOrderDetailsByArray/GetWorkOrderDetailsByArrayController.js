"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorkOrderDetailsByArrayController = void 0;
class GetWorkOrderDetailsByArrayController {
    constructor(getWorkOrderDetailsByArrayUseCase) {
        this.getWorkOrderDetailsByArrayUseCase = getWorkOrderDetailsByArrayUseCase;
    }
    async handle(body) {
        const workOrderIds = body.workOrderIds;
        return this.getWorkOrderDetailsByArrayUseCase.execute(workOrderIds);
    }
}
exports.GetWorkOrderDetailsByArrayController = GetWorkOrderDetailsByArrayController;
//# sourceMappingURL=GetWorkOrderDetailsByArrayController.js.map