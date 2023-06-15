import { connectionProductionManager } from "../../../../../../../src/infra/database/index";
import { GetInksColorsUseCase } from "../usecases/get-inks-colors.useCase";
import { GetInksColorsController } from "../controller/get-inks-colors.controller";
import { GetInksColorsRepository } from "../repository/get-inks-colors.repository";

const GetInksRepository = new GetInksColorsRepository(connectionProductionManager);
const getInksColorsUseCase = new GetInksColorsUseCase(GetInksRepository);
const getInksColorsController = new GetInksColorsController(getInksColorsUseCase);

export {getInksColorsController}
