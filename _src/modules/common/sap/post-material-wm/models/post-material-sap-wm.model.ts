import { Entity } from "../../../../../domain/Entity/entity";


type SAPProps = {
  materialNumber: string;
  warehouseNumber: string;
  plantCode: string;
  warehouseCode: string;
  quantity: number;
  unityOfMeasurement: string;
  storageSectionOrigin: string;
  storageTypeOrigin: string;
  binOrigin: string;
  UDOrigin: string;
  storageSectionDestination: string;
  storageTypeDestination: string;
  binDestination: string;
  UDDestination: string;
  language: string;
}


export class PostMaterialSAPWM extends Entity<SAPProps> {

  constructor(props: SAPProps) {
    super(props);
  }

}
