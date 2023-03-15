import { connectionProductionManager } from "../../../../../../src/infra/database/index"
import { PrintingRegisterUseCase } from "./printing-register.useCase"; 
import { PrintingRegisterController } from "./printing-register.controller"; 
import { PrintingRegisterRepository } from "../../../../../infra/database/respositories/printing-register.repository";


const PrintRepository = new PrintingRegisterRepository(connectionProductionManager);
const printRegisterUseCase = new PrintingRegisterUseCase(PrintRepository);
const printRegisterController = new PrintingRegisterController(printRegisterUseCase);

export {printRegisterController};