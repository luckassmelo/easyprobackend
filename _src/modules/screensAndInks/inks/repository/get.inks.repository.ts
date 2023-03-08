import {InkEntity} from "../entity/ink.entity"

export interface IGetInksRepository {
    getAll(): Promise<InkEntity[]>;
}