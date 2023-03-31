import { IfindByIdProcess } from "../../repository/find.by.id.process.respository";

type FindProcessInkRequest = {
    idProcess: number;
}
export class FindByIdUseCase {

    constructor(
        private readonly findByIdProcess: IfindByIdProcess
    ){}

    async execute({idProcess}: FindProcessInkRequest){
        return await this.findByIdProcess.return(idProcess)
    }
}
