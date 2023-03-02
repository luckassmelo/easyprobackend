export type HttpResponse<T = any> = {
    statusCode: number;
    message?: string;
    totalItems?: number;
    items?: T;
    body?: T;
  };
  