import { ErrorProps } from './generic.error'
import { GenericError } from './generic.error'

export class BadRequestError extends GenericError {
  constructor() {
    super("Bad request", "Anything is wrong in query", 400)
  }

  errorInfo(): ErrorProps {
    return {
      data: this.errorProps.data
    }
  }
}
