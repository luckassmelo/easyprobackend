import { connectionProductionManager } from "../../../../../../src/infra/database/index"
import { InksRegisterUseCase }from "./ink.register.usecase"
import { InksRegisterController } from "./inks.register.controller"
import { inksRepository } from "../../../../../infra/database/respositories/ink.database"


const InkRepository = new inksRepository(connectionProductionManager);
const registerInkUseCase = new InksRegisterUseCase(InkRepository);
const registerInkController = new InksRegisterController(registerInkUseCase);

export {registerInkUseCase, registerInkController};



