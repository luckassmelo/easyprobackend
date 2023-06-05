import { GetInksColorsUseCase } from "../usecases/get-inks-colors.useCase";
import { Controller } from "../../../../../../presentation/protocols/controller";
import { HttpResponse } from "../../../../../../presentation/protocols/http";
import { GetInksColorsModel } from "../models/get-inks-colors.model";

type GetInkDTO = {
    idSite: number
}
export class GetInksColorsController implements Controller {
    constructor(
        private getInksColorsUseCase: GetInksColorsUseCase
    ){}

    async handle(props: GetInkDTO): Promise<HttpResponse>{
        const { idSite } = props
        const modelInstance =  new GetInksColorsModel({ idSite })
        const response = await this.getInksColorsUseCase.execute(modelInstance);

        return {
            statusCode: 200,
            response: response,
            message: `Success return`
        }
    }
}