import { FindByIdUseCase } from "./find.by.id.process.use.case";


export class FindByIdController {

    constructor(
        private findByIdProcess: FindByIdUseCase
    ){}


    async handle(id: any): Promise<any>{
        const idProcess: number = Number(id.idProcess)
       return await this.findByIdProcess.execute({idProcess})
    }
}


