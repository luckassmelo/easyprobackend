import { Entity } from "../../../../../domain/entity/entity";


type SAPProps = {
  materialNumber: string;
  warehouseNumber: string;
  plantCode: string;
  warehouseCode: string;
  quantity: number;
  unitOfMeasure: string;
  storageLocationOrigin: string;
  storageLocationTypeOrigin: string;
  positionOrigin: string;
  UDOrigin: string;
  storageLocationDestination: string;
  storageLocationTypeDestination: string;
  positionDestination: string;
  UDDestination: string;
  language: string;
}


export class PostMaterialSAPWM extends Entity<SAPProps> {

  constructor(props: SAPProps) {
    super(props);
  }

}
