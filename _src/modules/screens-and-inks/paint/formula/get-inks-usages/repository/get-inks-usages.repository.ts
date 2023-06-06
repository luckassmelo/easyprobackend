import { IGetInksUsagesRepository } from "../interface/get-inks-usages.interface";
import PostgresSQLAdapter from "../../../../../../../src/infra/database/PostgreSQLAdapter";
import { GetInksUsagesModel } from "../models/get-inks-usages.model";

export class GetInksUsagesRepository implements IGetInksUsagesRepository {
    constructor(
        readonly database: PostgresSQLAdapter
    ){}

    async getInksUsages(getInksUsagesProps: GetInksUsagesModel): Promise<any> {
        const result = await this.database.connection
        .select("*")
        .from("paint.tbl_ink_usage")
        .where("site", getInksUsagesProps.idSite)

        return result
    }
}