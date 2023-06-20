import { IGetInksColorsRepository } from "../interface/get-inks-colors.interface";
import PostgresSQLAdapter from "../../../../../../../src/infra/database/PostgreSQLAdapter"
import { GetInksColorsModel } from "../models/get-inks-colors.model";

export class GetInksColorsRepository implements IGetInksColorsRepository {
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async getInksColors(getInksColorsProps: GetInksColorsModel): Promise<any> {
        const result = await this.adapter.connection
        .select("*")
        .from("paint.tbl_ink_color")   
        .where("site", getInksColorsProps.idSite)   
        
        return result
    }
}