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



// type FindTriggerRequest = {
//     triggerId: number;
// }

// export class FindTriggerUseCase {
//     constructor(
//         private triggersRepository: ITriggersRepository
//     ){}

//     async execute({triggerId}: FindTriggerRequest) {

//         const trigger = await this.triggersRepository.findById(triggerId);
        
//         return trigger;
//     }
// }