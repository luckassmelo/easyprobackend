import { FormulaInfos } from "../models/insert-formula.model";
import { ResponseFormula } from "../types/response-insert-formula.type";
import { BadRequestError } from '../../../../../../infra/api/errors/bad-request.error'


export interface IinsertFormulaRepository {
    insertFormulaInfo(formula: FormulaInfos): Promise<ResponseFormula | BadRequestError>;
}