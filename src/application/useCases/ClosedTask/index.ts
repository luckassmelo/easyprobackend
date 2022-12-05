import { connectionProductionManager } from "../../../infra/database";
import { PrismaClosedRepository } from "../../../infra/repository/ClosedRepository";
import { ClosedTaskController } from "./ClosedTaskController";
import { ClosedTaskUseCase } from "./ClosedTaskUseCase";

const prismaClosedRepository = new PrismaClosedRepository(
	connectionProductionManager,
);

const closedTaskUseCase = new ClosedTaskUseCase(prismaClosedRepository);

const closedTaskController = new ClosedTaskController(closedTaskUseCase);

export { closedTaskUseCase, closedTaskController };
