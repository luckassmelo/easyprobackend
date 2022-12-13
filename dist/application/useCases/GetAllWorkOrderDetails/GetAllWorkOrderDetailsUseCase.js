"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllWorkOrderDetailsUseCase = void 0;
class GetAllWorkOrderDetailsUseCase {
    constructor(workOrderDetailsRepository) {
        this.workOrderDetailsRepository = workOrderDetailsRepository;
    }
    async execute() {
        return this.workOrderDetailsRepository.allWorkOrderDetails();
    }
}
exports.GetAllWorkOrderDetailsUseCase = GetAllWorkOrderDetailsUseCase;
//# sourceMappingURL=GetAllWorkOrderDetailsUseCase.js.map