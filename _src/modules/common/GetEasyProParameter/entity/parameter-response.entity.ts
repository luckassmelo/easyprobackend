import { Entity } from '../../../../domain/entity/Entity';
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
    return this.replaceAll(`${this.props.serverResource}${this.props.paramValue}${this.props.paramValueAux}${this.getFilterCharacter()}${filter}`, "null", "");
  }

  replaceAll(str: string, search: string, replacement: string): string {
    return str.replace(new RegExp(search, 'g'), replacement);
  }

  getFilterCharacter(): string {
    if (this.props.descResource === "MDC" ||
      this.props.descResource === "Api Rest" ||
      this.props.descResource === "Maintenance" ||
      this.props.descResource === "BD Local"
    ) {
      return "?";
    }
    else if (this.props.descResource === "Cronetwork") {
      return "&";
    }
    return "";
  }
}
