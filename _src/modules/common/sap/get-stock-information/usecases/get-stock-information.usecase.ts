import { GenericError } from '../../../../../infra/api/errors/generic.error';
import { IGetStockInformationRepository } from '../interfaces/get-stock-information-repository.interface';
import { Material } from '../models/material.model';
import { SAPRequest } from '../models/sap-request.entity';

export class GetStockInformationUseCase {

  constructor(private readonly getStockInformationRepository: IGetStockInformationRepository) { }

  async execute(sapRequest: SAPRequest): Promise<Material[]> {
    const response = await this.getStockInformationRepository.getStock(sapRequest);

    if (response.length === 0) {
      throw new GenericError('SAP Request', 'No stock available', 400);
    }

    return response;
  }
}
