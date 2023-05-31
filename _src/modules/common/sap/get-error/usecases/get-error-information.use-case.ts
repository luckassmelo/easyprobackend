import { GenericError } from "../../../../../infra/api/errors/generic.error";
import { IGetErrorRepository } from "../interface/get-error-repository.interface";
import { GetError } from "../models/get-error.model";

type responseErrorinfo = {
    name: string 
}

export class GetErrorUseCase {
    constructor( private readonly getErrorRepo: IGetErrorRepository){}
    async execute(requisition: GetError): Promise<responseErrorinfo>{
        const response = await this.getErrorRepo.findError(requisition);


        return response;
    }
}