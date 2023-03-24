import { ZebraPrintingEntity } from "../../entity/zebra-printing.entity";
import { IZebraPrintingRepository } from "../../repository/zebra-printing.repository";
import { ZebraType } from "../../types/zebra-printing.type";


export class ZebraPrintingUseCase{
    constructor(
        private zebraPrintingRepository: IZebraPrintingRepository
    ){}

    //ficar de olho
    async execute(body: ZebraType){
        const labelProps = new ZebraPrintingEntity({
            ...body
        })
        return await this.zebraPrintingRepository.printing(labelProps)
    }
}