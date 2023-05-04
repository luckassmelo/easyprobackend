import { SSLAuth } from '../models/ssl-auth.model';

export interface IHttpStrategy {
  request(
    url: string,
    method: string,
    data?: any,
    headers?: Record<string, string>,
    auth?: SSLAuth,
    params?: Record<string, string>
  ): Promise<any>;
}
