import { CustomError } from '../../../domain/errors/custom.error';

type ErrorProps = {
  data?: any | null;
}


export class GenericError extends CustomError<ErrorProps> {

  constructor(name: string, message: string, statusCode?: number, props?: ErrorProps) {
    super(name, message, statusCode ?? 500, props ?? {});
  }

  get errorInfo(): ErrorProps {
    return {
      data: this.errorProps.data
    }
  }
}
