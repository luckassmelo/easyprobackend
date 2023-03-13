import { getTasksByIdOeeController } from "../../../application/useCases/GetTasksByIdOee";
import { productionManager, pgConfig } from "../../../config/database";
import { PgAdapter } from "../../database/PgAdapter";
import PostgresSQLAdapter from "../../database/PostgreSQLAdapter";
import { PrismaTasksRepository } from "../../repository/TasksRepository";
import { GetTasksEvent } from "./GetTasksEvent";
import { TriggerTaskInsertDataEvent } from "./TriggerTaskInsertDataEvent";

export const getTasksEvent = new GetTasksEvent(getTasksByIdOeeController);

const postgresAdapter = new PostgresSQLAdapter(productionManager);
const tasksRepository = new PrismaTasksRepository(postgresAdapter);
const pgAdapter = new PgAdapter(pgConfig);

export const triggerTaskInsertDataEvent = new TriggerTaskInsertDataEvent(
  pgAdapter,
  tasksRepository
);
