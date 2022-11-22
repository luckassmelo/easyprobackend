"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFound {
    async notFoundHandler(req, res) {
        res.status(404).send('Route does not exist. 😞');
    }
}
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map