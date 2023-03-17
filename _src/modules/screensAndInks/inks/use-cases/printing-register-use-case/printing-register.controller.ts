import { PrintingRegisterUseCase } from "./printing-register.useCase";
import {Controller} from '../../../../../presentation/protocols/controller';
import { HttpResponse } from "../../../../../presentation/protocols/http";

export class PrintingRegisterController implements Controller{
    constructor(
        private printingRegisterUseCase: PrintingRegisterUseCase
    ){}
     
    async handle(body: any, id:number): Promise<HttpResponse>{        
        console.log(body);
        
        try {
            await this.printingRegisterUseCase.execute(body, id);

        return{
            statusCode: 201,
            body: true
        }
        
        }catch (err: any) {
            console.log(err);
            
            return {
                statusCode: 500,
                body: err.message,
            }
        }
    }
}