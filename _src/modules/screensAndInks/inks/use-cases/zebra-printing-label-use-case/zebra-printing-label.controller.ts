import { ZebraPrintingUseCase } from "./zebra-printing-label.useCase";
import { ZebraType } from "../../types/zebra-printing.type";
import {Controller} from '../../../../../presentation/protocols/controller'



export class ZebraPrintingController implements Controller{
    constructor(
        private zebraPrintingUseCase: ZebraPrintingUseCase
    ){}

    async handle (request: ZebraType): Promise<any>{
        try{
            await this.zebraPrintingUseCase.execute({
                ...request
            })
        }
        catch{
          throw new Error();
        }
    };
}