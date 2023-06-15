import { connectionProductionManager } from "../../../../../../../src/infra/database/index";
import { GetAllFormulasUseCase } from "../usecases/get-all-formulas.useCase";
import { GetAllFormulasController } from "../controller/get-all-formulas.controller";
import { GetAllFormulasRepository } from "../repository/get-all-formulas.repository";

const GetFormulasRepository = new GetAllFormulasRepository(connectionProductionManager);
const getAllFormulasUseCase = new GetAllFormulasUseCase(GetFormulasRepository);
const getAllFormulasController = new GetAllFormulasController(getAllFormulasUseCase);

export {getAllFormulasController}
