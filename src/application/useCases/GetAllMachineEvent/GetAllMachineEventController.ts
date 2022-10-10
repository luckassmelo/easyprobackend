import { GetAllMachineEventUseCase } from "./GetAllMachineEventUseCase";


export class GetAllMachineEventController {

    constructor(
        private getAllMachineEventUseCase: GetAllMachineEventUseCase
    ){}

    async handle() {
        return await this.getAllMachineEventUseCase.execute();
    }
}