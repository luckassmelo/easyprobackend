import { GetAllFormulasUseCase } from "../usecases/get-all-formulas.useCase";
import { Controller } from "../../../../../../presentation/protocols/controller";
import { HttpResponse } from "../../../../../../presentation/protocols/http";
import { GetAllFormulasModal } from "../models/get-all-formulas.models";
import { GenericError } from "../../../../../../infra/api/errors/generic.error";

type GetFormulaDTO = {
    idSite: number
}

export class GetAllFormulasController implements Controller {
    constructor(
        private getAllColorsUseCase: GetAllFormulasUseCase
    ){}

    async handle(props: GetFormulaDTO): Promise<HttpResponse>{
        const { idSite } = props

        const modalInstance = new GetAllFormulasModal
        modalInstance.idSite = Number(idSite)

        const response = await this.getAllColorsUseCase.execute(modalInstance);

        if(response.length === 0) {
            throw new GenericError('No Content', 'No content in request', 204); 
        }

        return {
            statusCode: 200,
            response: response,
            message: 'Success return'
        }
    }
}