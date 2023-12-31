import { ErrorProps } from './generic.error'
import { GenericError } from './generic.error'

export class InternalServerError extends GenericError {
  constructor() {
    super("Internal Server Error", "Error internal in API", 500)
  }

  errorInfo(): ErrorProps {
    return {
      data: this.errorProps.data
    }
  }
}
