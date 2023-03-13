import { InkEntity } from "../entity/ink.entity";
import {InkDatabase} from "../types/ink.type.database"

export abstract class InkSearchAdapter{
    static insertData(obj: InkDatabase){

        return new InkEntity({
            idProcess: obj.id_process,
            preparationDate: new Date(obj.manufacture_date_schott).toLocaleDateString(),
            batchNumberSchott: obj.batch_number_schott,
            initialCodeInk: obj.initial_code, 
            colorInk: obj.color_ink,
            finalCodeInk: obj.final_code_ink,
            validationDateInk: obj.expiration_date_schott,
            typeToUse: obj.type_use,
            weightInk: obj.weight_ink_schott,
            batchNumberMedium: obj.batch_number_medium,
            fabricationDateMedium: obj.manufacture_date_medium,
            codeMedium: obj.medium_code,
            weightMedium: obj.weight_medium,
            fabricationDateInk: obj.manufacture_date_ink_vendor,
            batchNumberInk: obj.batch_ink_vendor,
            analysisDesinty: obj.density,
            analysisViscosity: obj.viscosity,
            aditionalEnamel: obj.aditional_enamel,
            aditionalMedium: obj.aditional_medium
        })
    }
}

