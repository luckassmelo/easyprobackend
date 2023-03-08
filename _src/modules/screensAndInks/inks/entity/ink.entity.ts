import { Entity } from "../../../../domain/Entity/entitiy"
export enum useType {
    GRA = 'GRA',
    VIB = 'VIB',
    ANI = 'ANI',
    OPC = 'OPC'
}

type InkProps = {
    idProcess: number
    preparationDate: string,
    batchNumberSchott: string,
    initialCodeInk: string, 
    colorInk: string,
    finalCodeInk: string,
    validationDateInk:  string,
    typeToUse: useType,
    weightInk: number,
    batchNumberMedium: number,
    fabricationDateMedium: string,
    codeMedium: string,
    weightMedium: number,
    fabricationDateInk:string,
    batchNumberInk: number,
    analysisDesinty?: number,
    analysisViscosity?: number,
    aditionalEnamel?: number,
    aditionalMedium?: number,
    id_site?: number,
    id_user?: number
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

