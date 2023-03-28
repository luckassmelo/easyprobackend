import { PrintingRegisterEntity } from "../entity/printing-register.entity";
export interface IPrintingRepository {
    register(registerProps: PrintingRegisterEntity[]): Promise<any>
}