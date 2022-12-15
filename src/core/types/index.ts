export type TriggerRequest = {
    name: string;
    piecesValue: number;
    statusValue: string;
    status: boolean;
    groupId?: number | null;
    oeeId?: number | null;
    triggerTypeId: number;
    userId: number;
    createdAt?: Date | null;
    isProductiveTime: boolean;
};

export type MachineEventProps = {
    eventDate: Date;
    eventName: string;
    machine: string;
    workorder: string;
    statusCode: string;
    statusReason: string;
    value: string;
}

export type WorkOrderDetailsProps = {
    ORDER_NO : string;
    CAPACITY_PP : string;
    MATERIAL_TYPE : string;
    BREAKABILITY_PP : string;
    NUMBER_OF_RINGS : string;
    GLISSE_DEVICE : string;
    AMMONIUM_SULFATE_DEV : string;
    OUTER_DIAMETER_BODY : string;
    PRINTING_PP : string;
    NECK_DIAMETER : string;
    SCHEDAREA : string;
    TOOL : string;
    
}

export type MachineEventResponse = {
    eventDate: Date;
    eventName: string;
    machine: string;
    workorder: string;
    statusCode?: string;
    statusReason?: string;
    name?: string;
    value?: number;
}

export interface WorkOrderMap {
    [key: string]: WorkOrderDetailsProps;
}