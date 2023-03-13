
import { InkGetProcess } from "../entity/ink.get.process.entity";

export interface IGetInksRepository {
    getAll(): Promise<InkGetProcess[]>;
}