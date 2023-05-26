import { Entity } from "../../../../../domain/Entity/entity"

export type UpdateItemProp = {
    date_response_item: string, 
    resp_response_item: number,
    status_requisition: string,
    item_disponible: string,
    qtd_provided:  number,
    id_reason: number
}

export class UpdateItemModel extends Entity<UpdateItemProp> {
    constructor(props: UpdateItemProp, id?: number) {
        super(props, id);
    }
}