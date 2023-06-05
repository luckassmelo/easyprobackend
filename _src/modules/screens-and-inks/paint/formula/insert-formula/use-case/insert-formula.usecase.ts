import { BadRequestError } from "../../../../../../infra/api/errors/bad-request.error";
import { IinsertFormulaRepository } from "../interface/insert-formula.interface";
import { FormulaInfos } from "../models/insert-formula.model";
import { ResponseFormula } from "../types/response-insert-formula.type";


export class InsertFormulaUseCase {
    constructor(private insertFormulaRepository: IinsertFormulaRepository){}

    async execute(formula: FormulaInfos): Promise<ResponseFormula | BadRequestError>{
        const response = await this.insertFormulaRepository.insertFormulaInfo(formula);
        
        
        return response;
    }
}