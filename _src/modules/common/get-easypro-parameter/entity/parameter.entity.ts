import { Entity } from "../../../../domain/entity/Entity";

type ParameterProps = {
  filter: string;
  idSite: number;
  name: string;
};

export class Parameter extends Entity<ParameterProps> {
  constructor(props: ParameterProps) {
    super(props);
  }
  static create(props: ParameterProps) {
    const { filter, ...otherProps } = props;
    return new Parameter({
      filter: filter ?? "",
      ...otherProps
    });
  }
}
