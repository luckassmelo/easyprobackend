import { InksRegisterUseCase } from "./ink.register.usecase";
import { InkProps } from "../../types/ink.types";
import {HttpResponse} from "../../../../../presentation/protocols/http"
import {Controller} from '../../../../../presentation/protocols/controller'



export class InksRegisterController implements Controller{
    constructor(
        private inksRegisterUseCase: InksRegisterUseCase
    ){}
    //Create a type for return HTTP request    
    async handle(body: InkProps): Promise<HttpResponse>{        
        try {
            await this.inksRegisterUseCase.execute({
             ...body
            })
        
            console.log(body);

        return{
            statusCode: 201,
            body: true
        }
        
        //Create a type for this catch
        }catch (err: any) {
            console.log(err);
            
            return {
                statusCode: 500,
                body: err.message,
            }
        }
    }
}

