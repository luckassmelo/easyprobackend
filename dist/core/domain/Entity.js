"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(props, id) {
        this.props = props;
        this._id = id !== null && id !== void 0 ? id : 0;
    }
    get id() {
        return this._id;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map