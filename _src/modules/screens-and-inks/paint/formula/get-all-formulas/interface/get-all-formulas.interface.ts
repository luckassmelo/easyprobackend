import { GetAllFormulasModal } from "../models/get-all-formulas.models";

export interface IGetAllFormulasRepository {
    getAllFormulas(getAllFormulasProps: GetAllFormulasModal): Promise<GetAllFormulasModal[]>
}