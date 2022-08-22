import { Entity } from "../../core/domain/Entity";

type WorkOrderDetailsProps = {
    orderNumber: string;
    capacityPP: number;
    materialType: string;
    breakabilityPP: string;
    numberOfRings: number;
    glisseDevice: string;
    ammoniumSulfateDev: string;
    outerDiameterBody: number;
    printingPP: string;
    neckDiameter: number;
    schedarea: string;
    tool: number;
} 

export class WorkOrderDetails extends Entity<WorkOrderDetailsProps> {
    constructor(props: WorkOrderDetailsProps, id?: number) {
        super(props, id);
    }
}