import { UpdateItemUseCase } from "../usecases/update-item.useCase";
import { Controller } from "../../../../../presentation/protocols/controller";
import { HttpResponse } from "../../../../../presentation/protocols/http";
import { UpdateItemProp } from "../models/update-item.model";

export class UpdateItemController implements Controller {
    constructor(
        private warehouseControllerUseCase: UpdateItemUseCase
    ) {}

    async handle(body: UpdateItemProp, id:number): Promise<HttpResponse>{   
        await this.warehouseControllerUseCase.execute(body, id);

        return {
            statusCode: 200,
            message: "The update was successful",
            response: true 
        }
    }
}