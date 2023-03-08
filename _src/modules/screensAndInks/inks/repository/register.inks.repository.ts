import { InkEntity } from "../entity/ink.entity";

export interface IinkRepository {
    save(inkProps: InkEntity): Promise<any>;
}

