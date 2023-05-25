import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { IHttpStrategy } from '../interface/http-strategy.interface';
import { SSLAuth } from '../models/ssl-auth.model';
import https from 'https';

export class AxiosAdapterStrategy implements IHttpStrategy {
  async request(
    url: string,
    method: string,
    data?: any,
    headers?: Record<string, string> | undefined,
    auth?: SSLAuth | undefined,
    params?: Record<string, string>): Promise<any> {

    const config: AxiosRequestConfig = { url, method, data };
    if (headers) config.headers = headers;
    if (auth) config.httpsAgent = new https.Agent(auth.toAgentOptions());
    if (params) config.params = params;

    const response = await axios(config);

    return response.data;
  }

}
