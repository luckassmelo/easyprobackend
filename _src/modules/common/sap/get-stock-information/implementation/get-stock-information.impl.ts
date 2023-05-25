import { httpSapAdapter } from '../adapters/http-sap.adapter';
import { GetStockInformationController } from '../controller/get-stock-information.controller';
import { GetStockInformationRepository } from '../repository/get-stock-information.repository';
import { GetStockInformationUseCase } from '../usecases/get-stock-information.usecase';

const getStockInformationRepository = new GetStockInformationRepository(httpSapAdapter);
const getStockInformationUseCase = new GetStockInformationUseCase(getStockInformationRepository);
const getStockInformationController = new GetStockInformationController(getStockInformationUseCase);

export { getStockInformationController };
