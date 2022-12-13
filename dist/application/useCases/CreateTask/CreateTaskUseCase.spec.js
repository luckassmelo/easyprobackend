"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trigger_1 = require("../../../domain/entities/trigger");
const user_1 = require("../../../domain/entities/user");
describe('Create a task use case', () => {
    it('should be able to create a task', async () => {
        const user = new user_1.User({
            name: "Lucas"
        }, 1);
        const trigger = trigger_1.Trigger.create({
            description: "Description Trigger",
            value: 5,
            status: true,
            group: "AMP",
            userId: user.id,
            createdAt: new Date()
        }, 1);
    });
});
//# sourceMappingURL=CreateTaskUseCase.spec.js.map