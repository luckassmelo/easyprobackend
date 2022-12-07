"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const Entity_1 = require("../../core/domain/Entity");
class Task extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        return new Task(Object.assign({}, props), id);
    }
}
exports.Task = Task;
//# sourceMappingURL=task.js.map