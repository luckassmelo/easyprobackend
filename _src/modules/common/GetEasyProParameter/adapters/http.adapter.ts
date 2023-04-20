import http from 'http';

export class HttpAdapter {
  static async request(method: string, url: string, body?: any) {
    return new Promise((resolve) => {
      const req = http.request(url, { method }, (res) => {
        let responseData = '';
        const contentType = res.headers['content-type'];

        res.on('data', (chunk) => {
          responseData += chunk;
        });

        res.on('end', () => {
          if (contentType && contentType.indexOf('application/json') !== -1) {
            try {
              const parsedResponse = JSON.parse(responseData);
              resolve(parsedResponse);
            } catch (err) {
              resolve({ error: 'Error parsing response data as JSON.' });
            }
          } else {
            resolve(responseData);
          }
        });
      });

      req.on('error', (err) => {
        resolve({ error: `Error making HTTP request: ${err.message}` });
      });

      if (body) {
        req.setHeader('Content-Type', 'application/json');
        req.write(JSON.stringify(body));
      }

      req.end();
    });
  }
}
