import { FindTaskMachineUseCase } from "./FindTaskMachineUseCase";

export class FindTaskMachineController {
    constructor(
        private findTaskMachineUseCase: FindTaskMachineUseCase
    ){}

    async handle(body: any): Promise<any>{
        try{
            const type: string = String(body.type);
            const paramId: string = String(body.paramId);
            const isClosed: boolean = body.isClosed === "true" ? true : false;

            const taskResponse = await this
                                            .findTaskMachineUseCase
                                            .execute({type,paramId,isClosed})
            return (taskResponse);
        } catch (error: any) {
            return ({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}