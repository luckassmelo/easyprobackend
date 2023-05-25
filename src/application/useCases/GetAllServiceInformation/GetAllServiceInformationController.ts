import { GetAllServiceInformationUseCase } from "./GetAllServiceInformationUseCase";


export class GetAllServiceInformationController {

    constructor(
        private getAllServiceInformationUseCase: GetAllServiceInformationUseCase
    ){}

    async handle(): Promise<any> {
        return await this.getAllServiceInformationUseCase.execute();
    }
}