"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTriggersType = void 0;
const triggerType_1 = require("../../domain/entities/triggerType");
class PrismaTriggersType {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async findById(id) {
        const triggerTypeResult = await this.adapter.connection
            .select("*")
            .from("trigger.tbl_trigger_type")
            .where("id", id);
        if (!triggerTypeResult)
            return null;
        return new triggerType_1.TriggerType({
            name: triggerTypeResult[0].name,
            status: triggerTypeResult[0].status,
            isProductiveTime: triggerTypeResult[0].is_productive_time,
        }, triggerTypeResult[0].id);
    }
}
exports.PrismaTriggersType = PrismaTriggersType;
//# sourceMappingURL=TriggersTypeRepository.js.map