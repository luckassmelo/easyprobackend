import { GetAllFormulasModal } from "../models/get-all-formulas.models";
import { IGetAllFormulasRepository } from "../interface/get-all-formulas.interface";

export class GetAllFormulasUseCase {
    constructor(private getAllFormulasRepository: IGetAllFormulasRepository) {}

    async execute(props: GetAllFormulasModal) {
        return await this.getAllFormulasRepository.getAllFormulas(props)
    }
}