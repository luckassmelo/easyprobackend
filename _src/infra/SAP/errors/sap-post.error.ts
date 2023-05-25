import { GenericError } from '../../api/errors/generic.error';

export class SapPostError extends GenericError {
  constructor(name: string, message: string, info = {}) {
    super(name, message, 404, info);
  }
}
