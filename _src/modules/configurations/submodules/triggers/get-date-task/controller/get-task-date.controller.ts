import { GetTaskDateUseCase } from "../usecases/get-task-date.usecase";
import {Controller} from '../../../../../../presentation/protocols/controller';
import { HttpResponse } from "../../../../../../presentation/protocols/http";
import { GetDateOfTask } from "../models/get-date.model";
import {ParameterNotFoundError} from '../../../../../../infra/api/errors/parameter-not-found.error'

type RequestProps = {
    id: string
}

export class GetTaskDateController implements Controller{
    constructor(private usecase: GetTaskDateUseCase){}

    async handle (request: RequestProps): Promise<HttpResponse>{
        const {id} = request;
        
        if (!id) throw new ParameterNotFoundError('id');


        const getDate =  await this.usecase.execute(new GetDateOfTask({
            id
        }));
        
            
        return {
            statusCode: 200,
            response: getDate
        };
    };
}