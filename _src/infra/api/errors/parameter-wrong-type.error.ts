import { GenericError } from './generic.error';


export class ParameterWrongTypeError extends GenericError {

  constructor(parameterName: string, parameterType: string) {
    super(`ParameterTypeError`, `Parameter ${parameterName} is wrong type. Should be ${parameterType}.`, 400)
  }

}
