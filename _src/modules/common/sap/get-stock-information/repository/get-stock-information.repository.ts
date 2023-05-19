import { SAPRequest } from '../models/sap-request.entity';
import { IGetStockInformationRepository } from '../interfaces/get-stock-information-repository.interface'
import { IHttpStrategy } from '../../../../../infra/http/interface/http-strategy.interface';
import { sapConnectionConfiguration } from '../../../../../config/config';
import { Material } from '../models/material.model';
import { SSLAuth } from '../../../../../infra/http/models/ssl-auth.model';


export class GetStockInformationRepository implements IGetStockInformationRepository {
  private readonly SAP_GET_STOCK_IM_URL = `${sapConnectionConfiguration.urlToGetStockIm}`;
  private readonly SAP_GET_STOCK_WM_URL = `${sapConnectionConfiguration.urlToGetStockWm}`;
  private readonly SAP_GET_TOKEN_URL = `${sapConnectionConfiguration.urlToGetToken}`;


  constructor(private httpSapAdapter: IHttpStrategy) { }

  async getStock(sapRequest: SAPRequest): Promise<Material[]> {

    const { filter, type, orderBy } = sapRequest.props;
    const url = type === "IM" ? this.buildGetStockIMUrl(filter, orderBy) : this.buildGetSockWMUrl(filter, orderBy);
    const token = await this.getToken();
    const response = await this.httpSapAdapter.request(url, 'GET', undefined, this.buildSapHeaders(token), new SSLAuth(true));
    return response['d']['results'];
  }

  private buildGetStockIMUrl(filter: string, orderBy: string): string {
    let filterUrl = `?\$top=100&\$format=json&\$filter=${filter}`;
    if (orderBy !== undefined && orderBy !== null) filterUrl += `&\$orderby=${orderBy}`;

    return `${this.SAP_GET_STOCK_IM_URL}${filterUrl}`;
  }

  private buildGetSockWMUrl(filter: string, orderBy: string): string {
    let filterUrl = `?\$top=100&\$format=json&\$filter=${filter}`;
    if (orderBy !== undefined && orderBy !== null) filterUrl += `&\$orderby=${orderBy}`;

    return `${this.SAP_GET_STOCK_WM_URL}${filterUrl}`;
  }

  async getToken(): Promise<string> {
    const headers = this.buildSapHeadersBasicAuth();
    const response = await this.httpSapAdapter.request(this.SAP_GET_TOKEN_URL, 'POST', null, headers, new SSLAuth(false));
    return response['access_token'];
  }

  private buildSapHeaders(token: string): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'accept-encoding': 'gzip, deflate',
    };
  }

  private buildSapHeadersBasicAuth(): Record<string, string> {
    const { sapUser, sapPassword } = sapConnectionConfiguration;
    const auth = Buffer.from(`${sapUser}:${sapPassword}`).toString('base64');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`,
    };
  }

}
