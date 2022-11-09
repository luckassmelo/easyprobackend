import { connectionCronetwork } from "../../../infra/database/index";
import { WorkOrderDetailsRepository } from "../../../infra/repository/WorkOrderDetailsRepository";
import { GetWorkOrderDetailsByArrayController } from "./GetWorkOrderDetailsByArrayController";
import { GetWorkOrderDetailsByArrayUseCase } from "./GetWorkOrderDetailsByArrayUseCase";


const workOrderDetailsRepository = new WorkOrderDetailsRepository(
    connectionCronetwork
);
const getWorkOrderDetailsByArrayUseCase = new GetWorkOrderDetailsByArrayUseCase(
    workOrderDetailsRepository
);
const getWorkOrderDetailsByArrayController = new GetWorkOrderDetailsByArrayController(
    getWorkOrderDetailsByArrayUseCase
);

export { getWorkOrderDetailsByArrayController };
