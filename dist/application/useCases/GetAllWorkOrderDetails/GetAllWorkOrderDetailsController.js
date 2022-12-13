"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllWorkOrderDetailsController = void 0;
class GetAllWorkOrderDetailsController {
    constructor(getAllWorkOrderDetailsUseCase) {
        this.getAllWorkOrderDetailsUseCase = getAllWorkOrderDetailsUseCase;
    }
    async handle() {
        return this.getAllWorkOrderDetailsUseCase.execute();
    }
}
exports.GetAllWorkOrderDetailsController = GetAllWorkOrderDetailsController;
//# sourceMappingURL=GetAllWorkOrderDetailsController.js.map