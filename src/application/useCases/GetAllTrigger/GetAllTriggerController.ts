import { GetAllTriggerUseCase } from "./GetAllTriggerUseCase";

export class GetAllTriggerController {
    constructor(
        private getAllTriggerUseCase: GetAllTriggerUseCase
    ){}

    async handle() {
        return await this.getAllTriggerUseCase.execute();
    }
}