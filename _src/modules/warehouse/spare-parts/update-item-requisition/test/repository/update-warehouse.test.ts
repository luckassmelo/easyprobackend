import { InMemoryUpdateItem } from "./in-memory-repository-update-item";
import { UpdateItemModel } from "../../models/update-item.model";
import { initialItemProps } from "../mock/mock";

describe("UpdateItemInMemoryRepository", () => {
  let updateItemRepository: InMemoryUpdateItem;

  beforeEach(() => {
    updateItemRepository = new InMemoryUpdateItem();
  });

  it("should update an existing item", async () => {
    const updatedProps = {
      date_response_item: "2023-04-09 11:30:06.792 -0300",
      resp_response_item: 1609,
      status_requisition: "C",
      item_disponible: "canceled",
      qtd_provided: 2,
      id_reason: 8,
    };

    const initialItem = new UpdateItemModel(initialItemProps, 1);
    updateItemRepository["items"].push(initialItem);

    const updatedItem = new UpdateItemModel(updatedProps, 1);
    const result = await updateItemRepository.update(updatedItem);

    expect(result).toEqual(updatedItem);
  });
});
