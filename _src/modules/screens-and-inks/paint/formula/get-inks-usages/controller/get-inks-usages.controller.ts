import { GetInksUsagesUseCase } from "../use-cases/get-inks-usages.useCase";
import { Controller } from "../../../../../../presentation/protocols/controller";
import { HttpResponse } from "../../../../../../presentation/protocols/http";
import { GetInksUsagesModel } from "../models/get-inks-usages.model";
import { GenericError } from "../../../../../../infra/api/errors/generic.error";

type GetInkDTO = {
    idSite: number
}

export class GetInksUsagesController implements Controller {
    constructor(
        private useCase: GetInksUsagesUseCase
    ) {}
    async handle(props: GetInkDTO): Promise<HttpResponse> {
        const { idSite } = props

        const modalInstance = new GetInksUsagesModel()
        modalInstance.idSite = Number(idSite)

        const response = await this.useCase.execute(modalInstance)

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