import {Controller} from '../../../../../presentation/protocols/controller'
import { HttpResponse } from '../../../../../presentation/protocols/http';
import { GetErrorUseCase } from '../usecases/get-error-information.use-case';
import {ParameterNotFoundError} from '../../../../../infra/api/errors/parameter-not-found.error'
import { GetError } from '../models/get-error.model';
import { NotFoundError } from '../../../../../infra/api/errors/not-found.error';

type parameterToGetError = {
    id: string
}
export class GetErrorController implements Controller {
    constructor(private readonly getErrorInfoUseCase: GetErrorUseCase){}
        async handle(request: parameterToGetError): Promise<HttpResponse> {
            const {id} = request;

            if (!id){
                throw new ParameterNotFoundError('id requisition is not provided');
            }

            const getErrorReq = new GetError({id});
            
            const response = await this.getErrorInfoUseCase.execute(getErrorReq);

            if(!response){
                throw new NotFoundError('Nothing to show');
            }

            return {
                statusCode: 200,
                response: response,
                message: `Succes with requisition ${id}`
            };
        };
};