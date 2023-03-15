import { connectionProductionManager } from "../../../../../../src/infra/database/index"
import { PrintingRegisterUseCase } from "./printing-register.useCase"; 
import { PrintingRegisterController } from "./printing-register.controller"; 
import { printingRegisterRepository } from "../../../../../infra/database/respositories/printing-register.repository";


const PrintRepository = new printingRegisterRepository(connectionProductionManager);
const printRegisterUseCase = new PrintingRegisterUseCase(PrintRepository);
const printRegisterController = new PrintingRegisterController(printRegisterUseCase);

export {printRegisterController};