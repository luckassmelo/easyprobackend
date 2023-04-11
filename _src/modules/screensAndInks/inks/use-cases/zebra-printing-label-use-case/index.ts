import { ZebraPrintingController } from "./zebra-printing-label.controller";
import { connectionProductionManager } from "../../../../../../src/infra/database/index"
import { ZebraPrintingUseCase } from "./zebra-printing-label.useCase";
import {ZebraPrintingRepository} from "../../../../../infra/database/respositories/zebra-printing.repository"
const ZebraRepository = new ZebraPrintingRepository(connectionProductionManager)
const zebraPrintingUseCase = new ZebraPrintingUseCase(ZebraRepository)
const zebraPrintingController = new ZebraPrintingController(zebraPrintingUseCase)



export {zebraPrintingController}