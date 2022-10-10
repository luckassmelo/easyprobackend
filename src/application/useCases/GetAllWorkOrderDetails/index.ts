import { connectionCronetwork } from "../../../infra/database/index";
import { WorkOrderDetailsRepository } from "../../../infra/repository/WorkOrderDetailsRepository";
import { GetAllWorkOrderDetailsController } from "./GetAllWorkOrderDetailsController";
import { GetAllWorkOrderDetailsUseCase } from "./GetAllWorkOrderDetailsUseCase";


const workOrderDetailsRepository = new WorkOrderDetailsRepository(
    connectionCronetwork
);

const getAllWorkOrderDetailsUseCase = new GetAllWorkOrderDetailsUseCase(
    workOrderDetailsRepository
);

const getAllWorkOrderDetailsController = new GetAllWorkOrderDetailsController(
    getAllWorkOrderDetailsUseCase
);

export { getAllWorkOrderDetailsController };