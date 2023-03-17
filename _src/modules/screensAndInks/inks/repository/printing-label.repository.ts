import { PrintingEntity } from "../entity/printing.entity";
//Do a type for this method
export interface IPrintingRepository {
    printing(printingProps: PrintingEntity[]): Promise<any>
}