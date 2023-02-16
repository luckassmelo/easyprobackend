import { WorkOrderMap } from "../../../core/types";
import { GetWorkOrderDetailsByArrayUseCase } from "./GetWorkOrderDetailsByArrayUseCase";


export class GetWorkOrderDetailsByArrayController {
    constructor(private getWorkOrderDetailsByArrayUseCase: GetWorkOrderDetailsByArrayUseCase) {}

    async handle(body: any): Promise<WorkOrderMap | null> {
        const workOrderIds: Array<string> = body.workOrderIds;

        return this.getWorkOrderDetailsByArrayUseCase.execute(workOrderIds);
    }
}