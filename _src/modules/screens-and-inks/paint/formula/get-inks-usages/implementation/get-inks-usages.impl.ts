import { connectionProductionManager } from "../../../../../../../src/infra/database/index";
import { GetInksUsagesUseCase } from "../use-cases/get-inks-usages.useCase";
import { GetInksUsagesController } from "../controller/get-inks-usages.controller";
import { GetInksUsagesRepository } from "../repository/get-inks-usages.repository";

const GetInksRepository = new GetInksUsagesRepository(connectionProductionManager);
const getInksUsagesUseCase = new GetInksUsagesUseCase(GetInksRepository);
const getInksUsagesController = new GetInksUsagesController(getInksUsagesUseCase)

export {getInksUsagesController}