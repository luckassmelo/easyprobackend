import { WorkOrderDetailsProps } from "../../../core/types/index";
import { IWorkOrderDetailsRepository } from "../../repositories/IWorkOrderDetailsRepository";


export class GetWorkOrderDetailsByArrayUseCase {
    constructor(private workOrderDetailsRepository: IWorkOrderDetailsRepository) {}

    async execute(workOrderIds: string[]): Promise<WorkOrderDetailsProps[] | null> {
        return this.workOrderDetailsRepository.findMany(workOrderIds);
    }
}