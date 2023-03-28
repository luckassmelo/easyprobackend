import { PrintingRegisterEntity } from "../../entity/printing-register.entity";
import { IPrintingRepository } from "../../repository/printing-label.repository";
import { PrintingProp } from "../../types/printing.types";



export class PrintingRegisterUseCase{

    constructor(
        private printingRepository: IPrintingRepository 
    ) {}

    async execute(body: PrintingRegisterEntity, id: number) {

      const printingRegister = body['ArrayWithLabelInfos'].map((obj)=>{
            return new PrintingRegisterEntity({
                ...obj
            }, id)
        });
        return await this.printingRepository.register(printingRegister);
    }
}