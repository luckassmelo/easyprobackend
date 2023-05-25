import { Entity } from "../../../../domain/entity/Entity"


type InkDataProps = {
    preparationDate: string,
    batchNumberSchott: string,
    initialCodeInk: string, 
    colorInk: string,
    finalCodeInk: string,
    typeToUse: string
}

export class InkGetProcess extends Entity<InkDataProps> {

    constructor(props: InkDataProps, id: number){
        super(props, id);
    }

    static create(props: InkDataProps, id: number){
        return new InkGetProcess({
            ...props
        }, id);
    }
}

