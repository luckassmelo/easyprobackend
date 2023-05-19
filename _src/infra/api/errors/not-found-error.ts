import { ErrorProps } from '../errors/generic.error'
import { GenericError } from '../errors/generic.error'

export class NotFoundError extends GenericError {
    constructor( message?: string){
      super("Not found", message ?? "Not found what you are looking for", 404)
    }
  
    errorInfo(): ErrorProps {
      return {
        data: this.errorProps.data
      }
    }
}