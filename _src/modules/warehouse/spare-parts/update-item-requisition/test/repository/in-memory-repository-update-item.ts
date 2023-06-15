import { IUpdateItemRepository } from "../../interface/update-item.interface";
import { UpdateItemModel } from "../../models/update-item.model";

export class InMemoryUpdateItem implements IUpdateItemRepository {
  private items: UpdateItemModel[];

  constructor() {
    this.items = [];
  }

  async update(updateProps: UpdateItemModel): Promise<any> {
    const existingItemIndex = this.items.findIndex(
      (item) => item.id === updateProps.id
    );

    if (existingItemIndex !== -1) {
      this.items[existingItemIndex] = updateProps;
    }

    return updateProps;
  }
}
