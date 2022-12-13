"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerType = void 0;
const Entity_1 = require("../../core/domain/Entity");
class TriggerType extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        return new TriggerType(props, id);
    }
}
exports.TriggerType = TriggerType;
//# sourceMappingURL=triggerType.js.map