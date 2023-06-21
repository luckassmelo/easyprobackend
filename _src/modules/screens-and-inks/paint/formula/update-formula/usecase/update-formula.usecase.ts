import { UpdateFormula } from "../models/update-formula.model";
import { IUpdateFormulaRepository } from "../interface/update-formula.interface";


export class UpdateFormulaUseCase {
    constructor(private updateRepository: IUpdateFormulaRepository){}

        async execute(props: UpdateFormula): Promise<any>{
            const response = await this.updateRepository.updateFormula(props);

            return response
        }
}