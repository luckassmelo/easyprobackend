import { IfindByIdProcess } from "../../../modules/screensAndInks/inks/repository/find.by.id.process.respository";
import PostgresSQLAdapter from "../../../../src/infra/database/PostgreSQLAdapter";
import {InkEntity} from "../../../modules/screensAndInks/inks/entity/ink.entity"
import { InkSearch } from "../../../modules/screensAndInks/inks/adapters/ink.search.adapter";
import { InkProps } from "../../../modules/screensAndInks/inks/types/ink.types";


export class FindByIdProcessInk implements IfindByIdProcess{

    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async return(id: number): Promise<InkEntity> {
      const result = await this.adapter.connection
        .select('*')
        .from('paint.tbl_paints')
        .where('id_process',id)
        
        return InkSearch.fromJson(result[0]);
    }
}


