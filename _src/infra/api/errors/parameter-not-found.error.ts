import { GenericError } from './generic.error';

export class ParameterNotFoundError extends GenericError {
  constructor(parameter: string) {
    super('RequestError', `Parameter ${parameter} not found`, 404);
  }
}
