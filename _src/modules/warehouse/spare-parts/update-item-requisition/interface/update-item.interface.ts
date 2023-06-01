import { UpdateItemModel } from "../models/update-item.model";

export interface IUpdateItemRepository {
    update(updateProps: UpdateItemModel): Promise<UpdateItemModel>
}
