import { connectionProductionManager } from "../../../../../../src/infra/database/index";
import { getAllInksRepository } from "../../../../../infra/database/respositories/ink.database";
import { GetAllInksUseCase } from "./get.all.inks.use.case";
import { GetAllInksController } from "./get.all.inks.controller";

const GetAllInksRepository = new getAllInksRepository(connectionProductionManager);
const getAllInksUseCase = new GetAllInksUseCase(GetAllInksRepository);
const getAllInksController = new GetAllInksController(getAllInksUseCase);

export {getAllInksController};




