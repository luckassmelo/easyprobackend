"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTriggerUseCase = void 0;
const trigger_1 = require("../../../domain/entities/trigger");
class CreateTriggerUseCase {
    constructor(triggersRepository, triggersTypesRepository) {
        this.triggersRepository = triggersRepository;
        this.triggersTypesRepository = triggersTypesRepository;
    }
    async execute(request) {
        const triggerType = await this.triggersTypesRepository.findById(request.triggerTypeId);
        if (!triggerType)
            throw new Error('Trigger type not found.');
        const trigger = new trigger_1.Trigger({
            description: request.description,
            groupId: request.groupId || null,
            oeeId: request.oeeId || null,
            piecesValue: request.piecesValue,
            status: request.status,
            statusValue: request.statusValue,
            triggerTypeId: request.triggerTypeId,
            userId: request.userId,
            isProductiveTime: request.isProductiveTime
        });
        const triggerCreated = await this.triggersRepository.save(trigger);
        return triggerCreated;
    }
}
exports.CreateTriggerUseCase = CreateTriggerUseCase;
//# sourceMappingURL=CreateTriggerUseCase.js.map