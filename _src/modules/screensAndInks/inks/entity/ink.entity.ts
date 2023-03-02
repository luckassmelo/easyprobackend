import { Entity } from "../../../../domain/Entity/entitiy"
export enum useType {
    GRA = 'GRA',
    VIB = 'VIB',
    ANI = 'ANI',
    OPC = 'OPC'
}

type InkProps = {
    preparationDate: Date | string,
    batchNumberSchott: string,
    initialCodeInk: string, 
    colorInk: string,
    finalCodeInk: string,
    validationDateInk: Date | string,
    typeToUse: useType,
    weigthInk: number,
    batchNumberMedium: number,
    fabricationDateMedium: Date | string,
    mediumCode: string,
    weigthMedium: number,
    fabricationDateInk: Date | string,
    batchNumberInk: string,
    analysiDesinty?: number,
    analysiViscosity?: number,
    aditionalEnamel?: number,
    aditionalMedium?: number,
    id_site?: number,
    id_user?: string
}

export class InkEntity extends Entity<InkProps> {

    constructor(props: InkProps){


        super(props);
    }

    
    static create(props: InkProps){
        return new InkEntity({
            ...props
        });
    }
}

