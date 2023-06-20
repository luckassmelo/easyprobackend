import { UpdateFormula } from "../models/update-formula.model";
import { UpdateFormulaUseCase } from "../usecase/update-formula.usecase";
import { Controller } from '../../../../../../presentation/protocols/controller';
import { HttpResponse } from "../../../../../../presentation/protocols/http";


type Updateprops = {
    weightInk: number;
    weightMedium: number;
    maxViscosity: number;
    minViscosity: number;
    maxDensity: number;
    minDensity: number;
    status: boolean;
};

type params = {
    idFormula: number;
}

export class UpdateFormulaController implements Controller {
        constructor(private usecase: UpdateFormulaUseCase){}
        
        async handle(params: params, body: Updateprops): Promise<HttpResponse>{
            const {idFormula} = params;
            const {weightInk, weightMedium, maxViscosity, minViscosity, maxDensity, minDensity, status} = body;
            const updateFormula = new UpdateFormula();
            updateFormula.idFormula = Number(idFormula);
            updateFormula.inkWeight = weightInk;
            updateFormula.mediumWeight = weightMedium;
            updateFormula.maxViscosity = maxViscosity;
            updateFormula.minViscosity = minViscosity;
            updateFormula.maxDensity = maxDensity;
            updateFormula.minDensity = minDensity;
            updateFormula.status = status;

            const response = await this.usecase.execute(updateFormula);
        return {
            statusCode: 200,
            response: response
        };
    }
}