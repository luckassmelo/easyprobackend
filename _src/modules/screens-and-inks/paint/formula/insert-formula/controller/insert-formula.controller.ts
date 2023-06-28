import { BadRequestError } from '../../../../../../infra/api/errors/bad-request.error';
import { Controller } from '../../../../../../presentation/protocols/controller';
import { HttpResponse } from '../../../../../../presentation/protocols/http';
import { FormulaInfos } from '../models/insert-formula.model';
import { InsertFormulaUseCase } from '../use-case/insert-formula.usecase';


type FormulaProps = {
    description: string,
    sapNumber: number,
    vendorDesc: string,
    mediumDesc: string,
    usageType: number,
    color: number,
    inkWeight: number,
    mediumWeight: number,
    minViscosity: number,
    maxViscosity: number,
    minDensity: number,
    maxDensity: number,
    status: string,
    site: number,
    idUser: number
}

export class InsertFormulaInfoController implements Controller {
    constructor(private usecase: InsertFormulaUseCase){}

    async handle(props: FormulaProps): Promise<HttpResponse>{
        const { description, sapNumber, vendorDesc, mediumDesc, usageType, color, inkWeight, mediumWeight, minViscosity, maxViscosity, minDensity, maxDensity, status, site, idUser } = props
        const formulaModel = new FormulaInfos();

        formulaModel.description = description
        formulaModel.sapNumber = sapNumber;
        formulaModel.vendorDesc = vendorDesc;
        formulaModel.mediumDesc = mediumDesc;
        formulaModel.usageType = usageType;
        formulaModel.color = color;
        formulaModel.inkWeight = inkWeight;
        formulaModel.mediumWeight = mediumWeight;
        formulaModel.minViscosity = minViscosity;
        formulaModel.maxViscosity = maxViscosity;
        formulaModel.minDensity = minDensity;
        formulaModel.maxDensity = maxDensity;
        formulaModel.status = status;
        formulaModel.site = site;
        formulaModel.idUser = idUser;
        
        const response = await this.usecase.execute(formulaModel);

        return {
            statusCode: 200,
            response: response,
            message: `Sucess with formula ${props.description}`
        }
    }
}