import { Entity } from "../../../../../domain/entity/Entity";

type SAPProps = {
  type: string;
  orderBy?: string;
  filter: string;
}


export class SAPRequest extends Entity<SAPProps> {
  constructor(props: SAPProps) {
    super(props);
  }
}
