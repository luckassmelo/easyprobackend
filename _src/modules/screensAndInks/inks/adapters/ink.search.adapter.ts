import { InkEntity } from "../entity/ink.entity";
import { InkProps } from "../types/ink.types";

export abstract class InkSearch{
    static fromJson(obj: InkProps){
        return new InkEntity({
            idProcess: obj.idProcess,
            preparationDate: obj.preparationDate,
            batchNumberSchott: obj.batchNumberSchott,
            initialCodeInk: obj.initialCodeInk, 
            colorInk: obj.colorInk,
            finalCodeInk: obj.finalCodeInk,
            validationDateInk: obj.validationDateInk,
            typeToUse: obj.typeToUse,
            weightInk: obj.weightInk,
            batchNumberMedium: obj.batchNumberMedium,
            fabricationDateMedium: obj.fabricationDateMedium,
            codeMedium: obj.codeMedium,
            weightMedium: obj.weightMedium,
            fabricationDateInk: obj.fabricationDateInk,
            batchNumberInk: obj.batchNumberInk,
            analysisDesinty: obj.analysisDesinty,
            analysisViscosity: obj.analysisViscosity,
            aditionalEnamel: obj.aditionalEnamel,
            aditionalMedium: obj.aditionalMedium
        })
    }
}