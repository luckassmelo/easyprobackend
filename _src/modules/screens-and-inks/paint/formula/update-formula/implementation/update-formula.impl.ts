import { UpdateFormulaUseCase } from "../usecase/update-formula.usecase";
import { UpdateFormulaController } from "../controller/update-formula.controller";
import { connectionProductionManager } from "../../../../../../../src/infra/database/index";
import { UpdateFormulaRepository } from "../repository/update-formula.repository";

const updateFormulaRepository = new UpdateFormulaRepository(connectionProductionManager);
const updateFormulaUseCase = new UpdateFormulaUseCase(updateFormulaRepository);
const updateFormulaController = new UpdateFormulaController(updateFormulaUseCase);

export { updateFormulaController };