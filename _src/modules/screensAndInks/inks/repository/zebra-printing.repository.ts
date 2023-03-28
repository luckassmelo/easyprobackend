import { ZebraPrintingEntity } from "../entity/zebra-printing.entity";


export interface IZebraPrintingRepository{
    printing(labelProps: ZebraPrintingEntity): Promise<any>
}