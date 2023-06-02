import { GetInksColorsUseCase } from "../usecases/get-inks-colors.useCase";
import { Controller } from "../../../../../../presentation/protocols/controller";
import { HttpResponse } from "../../../../../../presentation/protocols/http";
import { GetInksColorsProp } from "../models/get-inks-colors.model";

export class GetInksColorsController implements Controller {
    constructor(
        private getInksColorsUseCase: GetInksColorsUseCase
    ){}

    async handle(props: GetInksColorsProp): Promise<HttpResponse>{
        const response = await this.getInksColorsUseCase.execute(props);

        return {
            statusCode: 200,
            response: response,
            message: `Success return`
        }
    }
}