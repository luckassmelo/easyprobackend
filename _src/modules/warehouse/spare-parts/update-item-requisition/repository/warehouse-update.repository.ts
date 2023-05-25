import { IUpdateItemRepository } from "../interface/update-item.interface";
import PostgresSQLAdapter from "../../../../../../src/infra/database/PostgreSQLAdapter";
import { UpdateItemModel } from "../models/update-item.model";


export class UpdateItemRepository implements IUpdateItemRepository {
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async update(updateProps: UpdateItemModel): Promise<any> {
        const result = await this.adapter.connection('supply.tbl_item_requisition')
        .where('id_req', updateProps.id['idReq'])
        .update({
            ...(updateProps.props.status_requisition === 'C' ? { date_response_item: new Date() } : {}),
            resp_response_item: updateProps.props.resp_response_item,
            status_requisition: updateProps.props.status_requisition,
            item_disponible: updateProps.props.item_disponible,
            qtd_provided: updateProps.props.qtd_provided,
            id_reason: updateProps.props.id_reason
        });
    
        
        return result 
    }
}