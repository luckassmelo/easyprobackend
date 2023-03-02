import { InksRegisterUseCase } from "./ink.register.usecase";
import { InkProps } from "../../types/ink.types";
import {HttpResponse} from "../../../../../domain/Entity/types/http"



export class InksRegisterController {
    constructor(
        private inksRegisterUseCase: InksRegisterUseCase
    ){}
    //Create a type for return HTTP request    
    async handle(body: InkProps): Promise<HttpResponse>{        
        try {
            await this.inksRegisterUseCase.execute({
             ...body
            })
        
        return{
            statusCode: 201,
            body: true
        }
        //Create a type for this catch
        }catch (err: any) {
            
            return {
                statusCode: 500,
                body: err.message,
            }
        }
    }
}

