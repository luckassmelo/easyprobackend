import { connectionProductionManager } from "../../../../../../src/infra/database/index";
import { UpdateItemUseCase } from "../usecases/update-item.useCase";
import { UpdateItemController } from "../controller/update-item.controller";
import { UpdateItemRepository } from "../repository/warehouse-update.repository";

const UpdateRepository = new UpdateItemRepository(connectionProductionManager);
const updateItemUseCase = new UpdateItemUseCase(UpdateRepository);
const updateItemController = new UpdateItemController(updateItemUseCase);

export {updateItemController}