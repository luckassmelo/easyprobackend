import { WorkOrderDetails } from "../../../domain/entities/WorkOrderDetails";
import { IWorkOrderDetailsRepository } from "../../repositories/IWorkOrderDetailsRepository";

export class GetAllWorkOrderDetailsUseCase {
    constructor(private workOrderDetailsRepository: IWorkOrderDetailsRepository) {}

    async execute(): Promise<WorkOrderDetails[] | null> {
        return this.workOrderDetailsRepository.allWorkOrderDetails();
    }
}