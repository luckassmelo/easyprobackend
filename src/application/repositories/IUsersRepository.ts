import { User } from "../../domain/entities/user";

export interface IUsersRepository {
    findById(id: number): Promise<User | null>;
}