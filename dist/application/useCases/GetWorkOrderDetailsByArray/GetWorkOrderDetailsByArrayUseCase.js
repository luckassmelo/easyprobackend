"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorkOrderDetailsByArrayUseCase = void 0;
class GetWorkOrderDetailsByArrayUseCase {
    constructor(workOrderDetailsRepository) {
        this.workOrderDetailsRepository = workOrderDetailsRepository;
    }
    async execute(workOrderIds) {
        return this.workOrderDetailsRepository.findMany(workOrderIds);
    }
}
exports.GetWorkOrderDetailsByArrayUseCase = GetWorkOrderDetailsByArrayUseCase;
//# sourceMappingURL=GetWorkOrderDetailsByArrayUseCase.js.map