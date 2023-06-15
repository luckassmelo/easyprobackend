import { IGetAllFormulasRepository } from "../interface/get-all-formulas.interface";
import PostgresSQLAdapter from "../../../../../../../src/infra/database/PostgreSQLAdapter";
import { GetAllFormulasModal } from "../models/get-all-formulas.models";

export class GetAllFormulasRepository implements IGetAllFormulasRepository {
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async getAllFormulas(getAllFormulasProps: GetAllFormulasModal): Promise<any> {
        const result = await this.adapter.connection
        .select("*")
        .from("paint.tbl_formula")
        .where("site", getAllFormulasProps.idSite)

        return result 
    }
}