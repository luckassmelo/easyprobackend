"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineEvent = void 0;
const Entity_1 = require("../../core/domain/Entity");
class MachineEvent extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static convertArrayToObject(machineEvents) {
        const machineEventsObject = {};
        machineEvents.forEach(machineEvent => {
            machineEventsObject[machineEvent.machine] = machineEvent;
        });
        return machineEventsObject;
    }
}
exports.MachineEvent = MachineEvent;
//# sourceMappingURL=machineEvent.js.map