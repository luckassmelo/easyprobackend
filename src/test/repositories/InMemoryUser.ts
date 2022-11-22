import { IUsersRepository } from "../../application/repositories/IUsersRepository";
import { User } from "../../domain/entities/user";

export class InMemoryUser implements IUsersRepository {
  public users: User[] = [];

  async findById(id: number): Promise<User | null> {
    const user: User | null = this.users.find((user) => user.id === id) ?? null;

    return user;
  }
}
