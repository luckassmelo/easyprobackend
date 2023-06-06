import { GetInksColorsUseCase } from "../usecases/get-inks-colors.useCase";
import { Controller } from "../../../../../../presentation/protocols/controller";
import { HttpResponse } from "../../../../../../presentation/protocols/http";
import { GetInksColorsModel } from "../models/get-inks-colors.model";
import { GenericError } from "../../../../../../infra/api/errors/generic.error";

type GetInkDTO = {
    idSite: number
}
export class GetInksColorsController implements Controller {
    constructor(
        private getInksColorsUseCase: GetInksColorsUseCase
    ){}

    async handle(props: GetInkDTO): Promise<HttpResponse>{
        const { idSite } = props

        const modalInstance =  new GetInksColorsModel()
        modalInstance.idSite = Number(idSite)

        const response = await this.getInksColorsUseCase.execute(modalInstance);

        if (response.length === 0) { 
            throw new GenericError('No Content', 'No content in request', 204);
        }

        return {
            statusCode: 200,
            response: response,
            message: 'Success return'
        }
    }
}