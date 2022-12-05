import { Closed } from "../../domain/entities/closed";

export interface IClosedRepository {
    closedTask(closed: Closed): Promise<Closed | void>;
}