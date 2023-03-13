export enum useType {
    GRA = 'GRA',
    VIB = 'VIB',
    ANI = 'ANI',
    OPC = 'OPC'
}
export type InkProps = {
    idProcess: number
    preparationDate: string,
    batchNumberSchott: string,
    initialCodeInk: string, 
    colorInk: string,
    finalCodeInk: string,
    validationDateInk:  string,
    typeToUse: string,
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

