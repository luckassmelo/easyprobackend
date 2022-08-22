import { WorkOrderDetails } from "../../../domain/entities/WorkOrderDetails";
import { GetAllWorkOrderDetailsUseCase } from "./GetAllWorkOrderDetailsUseCase";



export class GetAllWorkOrderDetailsController {
    constructor(private getAllWorkOrderDetailsUseCase: GetAllWorkOrderDetailsUseCase) {}

    async handle(): Promise<WorkOrderDetails[] | null> {
        return this.getAllWorkOrderDetailsUseCase.execute();
    }
}