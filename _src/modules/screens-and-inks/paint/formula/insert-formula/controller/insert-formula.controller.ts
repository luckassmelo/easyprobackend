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
    status: boolean,
    site: number
}

export class InsertFormulaInfoController implements Controller {
    constructor(private usecase: InsertFormulaUseCase){}

    async handle(props: FormulaProps): Promise<HttpResponse>{
        const formulaProps =  new FormulaInfos({
            ...props
        });

        if(formulaProps.props == null) throw new BadRequestError();

        const response = await this.usecase.execute(formulaProps);

        return {
            statusCode: 200,
            response: response,
            message: `Sucess with formula ${props.description}`
        }
    }
}