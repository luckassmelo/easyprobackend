export type TriggerRequest = {
    description: string;
    value: number;
    status: boolean;
    group?: string | null;
    machine?: string | null;
    userId: number;
    createdAt?: Date | null;
};