import { FormulaInfos } from "../models/insert-formula.model";
import { InMemoryInsertFormula } from "./mock/formula-repository.mock"

describe("Insert formula into repository", () => {
    let insertFormulaRepository: InMemoryInsertFormula;

    beforeAll(() => {
        insertFormulaRepository =  new InMemoryInsertFormula();
    });

    it("should insert formula props", async () => {
        const formulaProps = {
                description: "Caneta esferográfica azul",
                sapNumber: 12345,
                vendorDesc: "Marca A",
                mediumDesc: "Esferográfica",
                usageType: 1,
                color: 1,
                inkWeight: 0.5,
                mediumWeight: 10,
                minViscosity: 10,
                maxViscosity: 20,
                minDensity: 0.9,
                maxDensity: 1.1,
                status: true,
                site: 2
            };
        
        const initialProps = new FormulaInfos(formulaProps);
        insertFormulaRepository["formulaBase"].push(initialProps);

        const result = insertFormulaRepository.insertFormulaInfo(initialProps);
        
        expect(result).not.toBeNull();
    });
});