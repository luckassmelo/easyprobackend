import { PrintingEntity } from "../../entity/printing.entity";
import { IPrintingRepository } from "../../repository/printing-label.repository";
import { PrintingProp } from "../../types/printing.types";



export class PrintingRegisterUseCase{

    constructor(
        private printingRepository: IPrintingRepository 
    ) {}

    async execute(body: PrintingEntity, id: number) {

      const printingRegister = body['ArrayWithLabelInfos'].map((obj)=>{
            return new PrintingEntity({
                ...obj
            }, id)
        });
        return await this.printingRepository.printing(printingRegister);
    }
}