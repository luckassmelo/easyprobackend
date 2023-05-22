import { ErrorProps } from './generic.error'
import { GenericError } from './generic.error'

export class UnauthorizedError extends GenericError {
  constructor() {
    super("Unauthorized", "Windowsuser or Password is incorrect", 401)
  }

  errorInfo(): ErrorProps {
    return {
      data: this.errorProps.data
    }
  }
}
