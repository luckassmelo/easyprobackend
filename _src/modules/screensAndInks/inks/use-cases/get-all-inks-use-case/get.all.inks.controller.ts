import { GetAllInksUseCase } from "./get.all.inks.use.case";


export class GetAllInksController {
    constructor(
        private getAllInksUseCase: GetAllInksUseCase
    ){}

    async handle(){
        try{
            const inksProcess = await this.getAllInksUseCase.execute();

            return {
                ...inksProcess
            }
        } catch(err: any){
            return {
                statusCode: err.statusCode,
                message: err.message
            }
        }
       
    }
}