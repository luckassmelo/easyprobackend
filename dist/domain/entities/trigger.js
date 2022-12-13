"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trigger = void 0;
const Entity_1 = require("../../core/domain/Entity");
class Trigger extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        return new Trigger(props, id);
    }
    static convertArrayToObject(triggers) {
        const triggersObject = {};
        triggers.forEach(trigger => {
            triggersObject[trigger.area] = trigger;
        });
        return triggersObject;
    }
}
exports.Trigger = Trigger;
//# sourceMappingURL=trigger.js.map