import { GetAllInksUseCase } from "./get.all.inks.use.case";

export class GetAllInksController {
    constructor(
        private getAllInksUseCase: GetAllInksUseCase
    ){}

    async handle(){
        const inksProcess = await this.getAllInksUseCase.execute();
        return inksProcess;
    }
}