import {connectionProductionManager} from '../../../../../../src/infra/database/index';
import { FindByIdProcessInk } from '../../../../../infra/database/respositories/find.by.id.repository';
import { FindByIdUseCase } from './find.by.id.process.use.case';
import { FindByIdController } from './find.by.id.process.controller';

const FindProcessInkById = new FindByIdProcessInk(connectionProductionManager);
const findByIdUseCase = new FindByIdUseCase(FindProcessInkById);
const findByIdController = new FindByIdController(findByIdUseCase);

export {findByIdController};


