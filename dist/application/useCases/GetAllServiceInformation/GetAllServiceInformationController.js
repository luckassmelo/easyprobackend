"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllServiceInformationController = void 0;
class GetAllServiceInformationController {
    constructor(getAllServiceInformationUseCase) {
        this.getAllServiceInformationUseCase = getAllServiceInformationUseCase;
    }
    async handle() {
        try {
            return await this.getAllServiceInformationUseCase.execute();
        }
        catch (error) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.GetAllServiceInformationController = GetAllServiceInformationController;
//# sourceMappingURL=GetAllServiceInformationController.js.map