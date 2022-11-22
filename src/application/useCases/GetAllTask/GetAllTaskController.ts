import { GetAllTaskUseCase } from "./GetAllTaskUseCase";

export class GetAllTaskController {
    constructor(
        private getAllTaskUseCase: GetAllTaskUseCase
    ){}

    async handle() {
        try{
            return await this.getAllTaskUseCase.execute();
        } catch(err: any) {
            return ({
                message: err.message || "Unexpected error."
            })
        }
    }
}