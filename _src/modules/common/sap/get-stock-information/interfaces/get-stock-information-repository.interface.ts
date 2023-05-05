import { Material } from '../models/material.model';
import { SAPRequest } from '../models/sap-request.entity';

export interface IGetStockInformationRepository {
  getStock(sapRequest: SAPRequest): Promise<Material[]>;
  getToken(): Promise<string>;
}
