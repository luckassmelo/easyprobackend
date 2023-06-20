import { BadRequestError } from "../../../../../../../infra/api/errors/bad-request.error";
import { IinsertFormulaRepository } from "../../interface/insert-formula.interface";
import { FormulaInfos } from "../../models/insert-formula.model";
import { ResponseFormula } from "../../types/response-insert-formula.type";


export class InMemoryInsertFormula implements IinsertFormulaRepository {

        public formulaBase: FormulaInfos[] = [];

        async insertFormulaInfo(formula: FormulaInfos): Promise<any> {
            const result = this.formulaBase.push(formula);

            if(!result) throw new Error();
            
            return result
        }
}