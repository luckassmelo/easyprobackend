import { IGetInksRepository } from "../../repository/get.inks.repository";


export class GetAllInksUseCase {
    constructor(
        private readonly getAllInksRepository: IGetInksRepository
    ) {}

    async execute(){
        const getInks = await this.getAllInksRepository.getAll();

        return getInks
    }
}