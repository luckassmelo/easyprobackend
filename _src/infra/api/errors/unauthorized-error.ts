import { ErrorProps } from '../errors/generic.error'
import { GenericError } from '../errors/generic.error'

export class UnauthorizedError extends GenericError {
    constructor(){
      super("Unauthorized", "Windowsuser or Password is incorrect", 401)
    }
  
    errorInfo(): ErrorProps {
      return {
        data: this.errorProps.data
      }
    }
  }