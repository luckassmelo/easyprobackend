import { IUpdateFormulaRepository } from "../interface/update-formula.interface";
import PostgresSQLAdapter from "../../../../../../../src/infra/database/PostgreSQLAdapter";
import { UpdateFormula } from "../models/update-formula.model";


export class UpdateFormulaRepository implements IUpdateFormulaRepository {
    constructor( readonly adapter: PostgresSQLAdapter){}

    async updateFormula(infos: UpdateFormula): Promise<any> {
        const result = await this.adapter.connection('paint.tbl_formula')
        .where('id', infos.idFormula)
        .update({
            ink_weight: infos.inkWeight,
            medium_weight: infos.mediumWeight,
            min_viscosity: infos.minViscosity,
            max_viscosity: infos.maxViscosity,
            min_density: infos.minDensity,
            max_density: infos.maxDensity,
            status: infos.status,
            remark: infos.remark,
            id_user: infos.idUser
        })

        return result;
    }
}