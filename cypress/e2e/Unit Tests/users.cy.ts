import { User } from "../../../src/domain/entities/user";
import { InMemoryUser } from "../../../src/test/repositories/InMemoryUser";

describe("All users", () => {
  const user = new User({
    name: "Gabriel",
  });

  const user2 = new User({
    name: "Carlos",
  });

  const userRepository = new InMemoryUser();
  userRepository.users.push(user, user2);

  it("Find user by id", async () => {
    const searchedUser = await userRepository.findById(user.id);

    expect(searchedUser).to.be.equal(user);
    expect(userRepository.users.length).to.be.equal(2);
  });
});
