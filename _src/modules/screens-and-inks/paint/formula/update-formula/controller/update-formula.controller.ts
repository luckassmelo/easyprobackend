import { UpdateFormula } from "../models/update-formula.model";
import { UpdateFormulaUseCase } from "../usecase/update-formula.usecase";
import {Controller} from '../../../../../../presentation/protocols/controller';
import { HttpResponse } from "../../../../../../presentation/protocols/http";
import { ParameterNotFoundError } from "../../../../../../infra/api/errors/parameter-not-found.error";

type Updateprops = {
    weightInk: number;
    weightMedium: number;
    maxViscosity: number;
    minViscosity: number;
    maxDensity: number;
    minDensity: number;
    status: boolean;
}

export class UpdateFormulaController implements Controller {
        constructor(private usecase: UpdateFormulaUseCase){}
        
        async handle(request: Updateprops, id: number): Promise<HttpResponse>{
            const updateFormulaInstance = new UpdateFormula({
                ...request
            }, id);
           
            if(!updateFormulaInstance.id) throw new ParameterNotFoundError('id');

            const response = await this.usecase.execute(updateFormulaInstance, id);

        return {
            statusCode: 200,
            response: response
        }
    }
}