import { UpdateFormula } from "../models/update-formula.model";
import { IUpdateFormulaRepository } from "../interface/update-formula.interface";


export class UpdateFormulaUseCase {
    constructor(private updateRepository: IUpdateFormulaRepository){}

        async execute(props: UpdateFormula, idFormula: number): Promise<any>{
            const response = await this.updateRepository.updateFormula(props, idFormula);

            return response
        }
}