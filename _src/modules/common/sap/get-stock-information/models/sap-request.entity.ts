import { Entity } from "../../../../../domain/entity/entity";

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
