import { connectionCronetwork, connectionMdcPPB, connectionProductionManager } from "../../../infra/database/index";
import { MachineEventsRepository } from "../../../infra/repository/MachineEventsRepository";
import { PrismaTasksRepository } from "../../../infra/repository/TasksRepository";
import { PrismaTriggersRepository } from "../../../infra/repository/TriggersRepository";
import { WorkOrderDetailsRepository } from "../../../infra/repository/WorkOrderDetailsRepository";
import { GetAllServiceInformationController } from "./GetAllServiceInformationController";
import { GetAllServiceInformationUseCase } from "./GetAllServiceInformationUseCase";


const triggersRepository = new PrismaTriggersRepository(
    connectionProductionManager
);

const tasksRepository = new PrismaTasksRepository(
    connectionProductionManager
);

const machineEventsRepository = new MachineEventsRepository(
    connectionMdcPPB
);

const workOrderDetailsRepository = new WorkOrderDetailsRepository(
    connectionCronetwork
)

const getAllServiceInformationUseCase = new GetAllServiceInformationUseCase(
    triggersRepository,
    tasksRepository,
    machineEventsRepository,
    workOrderDetailsRepository
);

const getAllServiceInformationController = new GetAllServiceInformationController(
    getAllServiceInformationUseCase
);

export { getAllServiceInformationController };