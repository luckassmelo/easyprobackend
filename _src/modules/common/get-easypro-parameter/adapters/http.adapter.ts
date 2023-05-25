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
          try {
            if (contentType === 'application/pdf') throw new Error('PDF');

            const parsedResponse = JSON.parse(responseData.trim());
            resolve(parsedResponse);
          } catch (err) {
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
