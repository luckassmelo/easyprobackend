import { Entity } from "../../../../domain/entity/Entity"



type ZebraPrintingProps = {
    inkCode: string;
    colorInk: string;
    batchSchott:string;
    idProcess:number;
    labelIndex:number;
}


export class ZebraPrintingEntity extends Entity<ZebraPrintingProps>{
    constructor(props: ZebraPrintingProps){
        super(props)
    }

    static create(props){
        return new ZebraPrintingEntity({
            ...props
        });
    }
}