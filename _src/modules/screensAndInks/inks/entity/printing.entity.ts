import { Entity } from "../../../../domain/Entity/entitiy"
import { PrintingProp } from "../types/printing.types";



type PrintingProps = {
  arrayObjetos: Array<PrintingProp>
}


export class PrintingEntity extends Entity<PrintingProps> {

    constructor(props: PrintingProps, id?: number){
        super(props, id);
    }

    static create(props: PrintingProps, id?: number){
        return new PrintingEntity({
            ...props
        }, id);
    }
}