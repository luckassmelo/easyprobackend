import { GetInksUsagesModel } from "../models/get-inks-usages.model";
import { IGetInksUsagesRepository } from "../interface/get-inks-usages.interface";

export class GetInksUsagesUseCase {
    constructor(private getInksUsagesRepository: IGetInksUsagesRepository) {}

    async execute(props: GetInksUsagesModel) {
        return await this.getInksUsagesRepository.getInksUsages(props);
    }
}
