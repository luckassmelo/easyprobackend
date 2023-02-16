import { WorkOrderDetailsProps, WorkOrderMap } from "../../../core/types/index";
import { WorkOrderDetails } from "../../../domain/entities/WorkOrderDetails";
import { IWorkOrderDetailsRepository } from "../../repositories/IWorkOrderDetailsRepository";


export class GetWorkOrderDetailsByArrayUseCase {
    constructor(private workOrderDetailsRepository: IWorkOrderDetailsRepository) {}

    async execute(workOrderIds: string[]): Promise<WorkOrderMap | null> {
        return await this.workOrderDetailsRepository.findMany(workOrderIds);
    }
}