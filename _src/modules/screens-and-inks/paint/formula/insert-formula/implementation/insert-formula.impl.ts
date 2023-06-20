import { connectionProductionManager } from '../../../../../../../src/infra/database/index';
import { InsertFormulaUseCase } from '../use-case/insert-formula.usecase';
import { InsertFormulaInfoController } from '../controller/insert-formula.controller';
import { InsertFormulaRepository } from '../repository/insert-formula.repository';


const insertFormulaRepository = new InsertFormulaRepository(connectionProductionManager);
const insertFormulaUseCase = new InsertFormulaUseCase(insertFormulaRepository);
const insertFormulaInfoController = new InsertFormulaInfoController(insertFormulaUseCase);


export { insertFormulaInfoController }