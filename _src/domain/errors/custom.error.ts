export abstract class CustomError<T> extends Error {
  public statusCode: number = 500;
  public message: string = 'Unexpected error';
  public name: string = 'InternError';
  readonly errorProps: T;


  constructor(name: string, message: string, statusCode: number, errorInfo: T) {
    super(message);
    this.errorProps = errorInfo;
    this.statusCode = statusCode;
    this.message = message;
    this.name = name;

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract get errorInfo(): T;
}