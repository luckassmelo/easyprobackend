import { InMemoryGetInksColorsRepository } from "./in-memory-repository-get-inks-colors.repository";
import {
  GetInksColorsModel
} from "../../models/get-inks-colors.model";
import { allInkColorsMock } from "../mock/mock";

describe("InMemoryGetInksColorsRepository", () => {
  let repository: InMemoryGetInksColorsRepository;

  beforeEach(() => {
    repository = new InMemoryGetInksColorsRepository();
  });

  it("should return filtered inks colors based on idSite", async () => {
    repository["inksColors"] = allInkColorsMock;

    const getInksColorsProps = {
      idSite: 1,
    };
    const getInksColorsModel = new GetInksColorsModel(getInksColorsProps);
    const result = await repository.getInksColors(getInksColorsModel);

    expect(result).toEqual([
      {
        id: 1,
        description: "Blue",
        site: 1,
      },
      {
        id: 2,
        description: "Red",
        site: 1,
      },
      {
        id: 3,
        description: "Yellow",
        site: 1,
      },
      {
        id: 4,
        description: "Grey",
        site: 1,
      },
      {
        id: 5,
        description: "Green",
        site: 1,
      },
    ]);
  });
});
