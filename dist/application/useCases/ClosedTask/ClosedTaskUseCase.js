"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosedTaskUseCase = void 0;
class ClosedTaskUseCase {
    constructor(closedRepository) {
        this.closedRepository = closedRepository;
    }
    async execute({ windowsUser, description, id, token }) {
        const closed = ({
            id,
            windowsUser,
            description,
            token
        });
        const closedComplet = await this.closedRepository.closedTask(closed);
        return closedComplet;
    }
}
exports.ClosedTaskUseCase = ClosedTaskUseCase;
//# sourceMappingURL=ClosedTaskUseCase.js.map