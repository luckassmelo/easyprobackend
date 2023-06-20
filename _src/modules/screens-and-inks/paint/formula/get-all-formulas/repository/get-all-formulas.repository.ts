import { IGetAllFormulasRepository } from "../interface/get-all-formulas.interface";
import PostgresSQLAdapter from "../../../../../../../src/infra/database/PostgreSQLAdapter";
import { GetAllFormulasModal } from "../models/get-all-formulas.models";

export class GetAllFormulasRepository implements IGetAllFormulasRepository {
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async getAllFormulas(getAllFormulasProps: GetAllFormulasModal): Promise<any> {
        const result = await this.adapter.connection
        .select(
            "paint.tbl_formula.*",
            "paint.tbl_ink_usage.description AS ink_usage_description",
            "paint.tbl_ink_color.description AS ink_color_description"
        )
        .from("paint.tbl_formula")
        .leftJoin("paint.tbl_ink_usage", "paint.tbl_ink_usage.id", "=", "paint.tbl_formula.id_type")
        .leftJoin("paint.tbl_ink_color", "paint.tbl_ink_color.id", "=", "paint.tbl_formula.id_color")
        .where("paint.tbl_formula.site", getAllFormulasProps.idSite)
        .andWhere((builder) => getAllFormulasProps.idFormula !== 0
            ? builder.where("paint.tbl_formula.id", getAllFormulasProps.idFormula)
            : builder
        );

        return result 
    }
}