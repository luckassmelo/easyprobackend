import { GetAllTaskUseCase } from "./GetAllTaskUseCase";

export class GetAllTaskController {
    constructor(
        private getAllTaskUseCase: GetAllTaskUseCase
    ){}

    async handle() {
        return await this.getAllTaskUseCase.execute();
    }
}