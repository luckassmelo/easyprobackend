import { PrintingRegisterEntity } from "../entity/printing-register.entity";
//Do a type for this method
export interface IPrintingRepository {
    printing(printingProps: PrintingRegisterEntity[]): Promise<any>
}