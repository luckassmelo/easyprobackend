import { Entity } from "../../../../domain/Entity/entitiy"
import { PrintingProp } from "../types/printing.types";



type PrintingProps = {
    ArrayWithLabelInfos: Array<PrintingProp>
}


export class PrintingRegisterEntity extends Entity<PrintingProps> {

    constructor(props: PrintingProps, id?: number){
        super(props, id);
    }

    static create(props: PrintingProps, id?: number){
        return new PrintingRegisterEntity({
            ...props
        }, id);
    }
}