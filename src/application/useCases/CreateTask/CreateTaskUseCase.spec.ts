import { Trigger } from "../../../domain/entities/trigger";
import { User } from "../../../domain/entities/user";
import { CreateTaskUseCase } from "./CreateTaskUseCase";


describe('Create a task use case', () => {
    it('should be able to create a task', async () => {

        const user = new User({
            name: "Lucas"
        }, 1);

        const trigger = Trigger.create({
                description: "Description Trigger",
                triggerTypeId: 1,
                value: 5,
                status: true,
                group: "AMP",
                userId: user.id,
                createdAt: new Date()
        }, 1);

    

        
    })
})