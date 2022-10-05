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
};