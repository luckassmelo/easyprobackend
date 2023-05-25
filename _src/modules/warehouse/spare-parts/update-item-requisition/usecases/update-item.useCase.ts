import { UpdateItemModel } from "../models/update-item.model";
import { IUpdateItemRepository } from "../interface/update-item.interface";
import { UpdateItemProp } from "../models/update-item.model";

export class UpdateItemUseCase {
  constructor(private warehouseRepository: IUpdateItemRepository) {}

  async execute(body: UpdateItemProp, id: number) {
    const warehouseUpdate = new UpdateItemModel({
        ...body
      }, id);

    return await this.warehouseRepository.update(warehouseUpdate);
  }
}
