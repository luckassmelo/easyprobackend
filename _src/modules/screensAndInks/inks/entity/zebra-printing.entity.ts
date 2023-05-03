import { Entity } from "../../../../domain/Entity/entity"



type ZebraPrintingProps = {
    inkCode: string;
    colorInk: string;
    batchSchott:string
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