import { Entity } from '../../../../domain/entity/entity';
import { ParameterResponseProps } from '../types/param.types';

export class ParameterResponse extends Entity<ParameterResponseProps> {
  constructor(props: ParameterResponseProps) {
    super(props);
  }

  static create(props: ParameterResponseProps) {
    return new ParameterResponse({
      ...props,
    });
  }

  getResource(filter = ''): string {
    return `${this.props.serverResource}${this.props.paramValue}${this.props.paramValueAux}${filter}`.replace("null", "");
  }
}
