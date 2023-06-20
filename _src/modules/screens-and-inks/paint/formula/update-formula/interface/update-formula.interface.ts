import { UpdateFormula } from "../models/update-formula.model";

export interface IUpdateFormulaRepository {
    updateFormula(infos: UpdateFormula, id: number): Promise<any>;
}