import { WorkOrderDetailsProps } from "../../../core/types/index";
import { GetWorkOrderDetailsByArrayUseCase } from "./GetWorkOrderDetailsByArrayUseCase";


export class GetWorkOrderDetailsByArrayController {
    constructor(private getWorkOrderDetailsByArrayUseCase: GetWorkOrderDetailsByArrayUseCase) {}

    async handle(body: any): Promise<WorkOrderDetailsProps[] | null> {
        const workOrderIds: Array<string> = body.workOrderIds;

        return this.getWorkOrderDetailsByArrayUseCase.execute(workOrderIds);
    }
}