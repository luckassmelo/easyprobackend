import { Entity } from "../../../../../domain/entity/Entity";


type SAPProps = {
  costCenter: string;
  materialNumber: string;
  plantCode: string;
  locationCode: string;
  batch: string;
  quantity: number;
  unityOfMeasurement: string;
  bin: string;
  movementType: string;
  internalOrder: string;
  headerDescription: string;
  referenceDocument: string;
  language: string;
}


export class PostMaterialSAPIM extends Entity<SAPProps> {

  constructor(props: SAPProps) {
    super(props);
  }

}
