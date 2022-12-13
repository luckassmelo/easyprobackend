"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUser = void 0;
class InMemoryUser {
    constructor() {
        this.users = [];
    }
    async findById(id) {
        var _a;
        const user = (_a = this.users.find((user) => user.id === id)) !== null && _a !== void 0 ? _a : null;
        return user;
    }
}
exports.InMemoryUser = InMemoryUser;
//# sourceMappingURL=InMemoryUser.js.map