import { ErrorProps } from '../errors/generic.error'
import { GenericError } from '../errors/generic.error'

export class BadRequestError extends GenericError {
    constructor(){
      super("Bad request", "Anything is wrong in query", 400)
    }
  
    errorInfo(): ErrorProps {
      return {
        data: this.errorProps.data
      }
    }
  }
  