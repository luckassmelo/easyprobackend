import { WorkOrderDetails } from "../../../domain/entities/WorkOrderDetails";
import { GetAllWorkOrderDetailsUseCase } from "./GetAllWorkOrderDetailsUseCase";
import { GenericLog } from "../../../../_src/domain/decorators/log.decorator";
import {saveGenericLoggin} from "../../../../_src/infra/database/respositories/save-loggin.repository"

export class GetAllWorkOrderDetailsController {
    constructor(private getAllWorkOrderDetailsUseCase: GetAllWorkOrderDetailsUseCase) {}

    @GenericLog({info: { message: "Process to get all WorkOrdersDetails"}, process: "WorkOrdersDetails"}, saveGenericLoggin)
    async handle(): Promise<WorkOrderDetails[] | null> {
        return this.getAllWorkOrderDetailsUseCase.execute();
    }
}