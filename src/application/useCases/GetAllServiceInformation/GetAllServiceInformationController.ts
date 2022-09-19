import { GetAllServiceInformationUseCase } from "./GetAllServiceInformationUseCase";


export class GetAllServiceInformationController {

    constructor(
        private getAllServiceInformationUseCase: GetAllServiceInformationUseCase
    ){}

    async handle(): Promise<any> {
        try {
            return await this.getAllServiceInformationUseCase.execute();
        } catch (error: any) {
            return({
                message: error.message || 'Unexpected error.' 
            });
        }
    }
}