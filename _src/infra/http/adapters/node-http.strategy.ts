import http, { RequestOptions } from 'http';
import https from 'https';
import { SSLAuth } from '../models/ssl-auth.model';
import { IHttpStrategy } from '../interface/http-strategy.interface';
import { log } from 'console';

export class NodeHttpStrategy implements IHttpStrategy {
  async request(
    url: string,
    method: string,
    data?: any,
    headers?: Record<string, string>,
    auth?: SSLAuth
  ): Promise<any> {
    const urlObject = new URL(url);
    const options: RequestOptions = {
      method: method.toUpperCase(),
      headers: headers,
      protocol: urlObject.protocol,
      hostname: urlObject.hostname,
      path: urlObject.pathname,
      port: urlObject.port ? parseInt(urlObject.port) : undefined,
      // rejectUnauthorized: auth ? auth.rejectUnauthorized : true,
    };

    log(options)
    return new Promise((resolve, reject) => {
      const transport = urlObject.protocol === 'https:' ? https : http;
      const req = transport.request(options, (res) => {
        let responseBody = '';

        res.on('data', (chunk) => {
          responseBody += chunk;
        });

        res.on('end', () => {
          log('response:', responseBody)
          resolve(JSON.parse(responseBody));
        });
      });

      req.on('error', (err) => {
        reject(err);
      });

      if (data) {
        req.write(JSON.stringify(data));
      }

      req.end();
    });
  }
}
