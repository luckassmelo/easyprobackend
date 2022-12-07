import { connectionProductionManager } from "../../../infra/database";
import { PrismaTasksRepository } from "../../../infra/repository/TasksRepository";
import { ClosedTaskController } from "./ClosedTaskController";
import { ClosedTaskUseCase } from "./ClosedTaskUseCase";

const prismaClosedRepository = new PrismaTasksRepository(
	connectionProductionManager,
);

const closedTaskUseCase = new ClosedTaskUseCase(prismaClosedRepository);

const closedTaskController = new ClosedTaskController(closedTaskUseCase);

export { closedTaskUseCase, closedTaskController };
