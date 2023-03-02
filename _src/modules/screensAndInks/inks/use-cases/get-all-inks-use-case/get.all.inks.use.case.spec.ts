import { IGetInksRepository } from "../../repository/get.inks.repository"
import { InkEntity } from "../../entity/ink.entity"
import { GetAllInksUseCase } from "./get.all.inks.use.case";

class GetAllInksRepositoryFake implements IGetInksRepository{
    async getAll(): Promise<InkEntity[] | undefined> {
        return undefined
    }
}

const makeSut = ()=>{
    const getAllInksRepository = new GetAllInksRepositoryFake();
    return new GetAllInksUseCase(getAllInksRepository);
};

const callGetAllInksRepositoryWithError = ()=>{
    class GetAllInksRepository implements IGetInksRepository{
        async getAll(): Promise<InkEntity[] | undefined> {
            throw new Error();
        }
    }

    return new GetAllInksRepository();
}

describe('Get all inks Use case', () => {
    it('should return an error if the process not found', ()=>{
        const sut = makeSut();

        expect(sut.execute()).rejects.toThrow('Error will be costumized')
    });


    it('should throw an error if any dependency throw', ()=>{
        const sut = new GetAllInksUseCase(
            callGetAllInksRepositoryWithError(),
        );
        expect(sut.execute()).rejects.toThrow();
    })
});