import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../../domain/errors/custom.error';


export class CustomErrorHandler {
  public static handleError(error: CustomError<any>, req: Request, res: Response, next: NextFunction): void {
    const statusCode: number = error.statusCode || 500;
    const message: string = error.message;
    const stackError = error.stack
    
    res.status(statusCode).json({
      error: {
        name: error.name,
        message: message,
        statusCode: statusCode,
        info: error.errorProps,
        stack: stackError
      }
    });
  }
}
