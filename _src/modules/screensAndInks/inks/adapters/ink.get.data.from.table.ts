import { InkGetProcess } from "../entity/ink.get.process.entity";
import {InkDataFromTable} from "../types/ink.type.database"

export abstract class InkDataToTableAdapter{
    static returnData(obj: InkDataFromTable){
    
        
        return new InkGetProcess({
            preparationDate: new Date(obj.manufacture_date_schott).toLocaleDateString(),
            batchNumberSchott: obj.batch_number_schott,
            initialCodeInk: obj.initial_code, 
            colorInk: obj.color_ink,
            finalCodeInk: obj.final_code_ink,
            typeToUse: obj.type_use,
        }, obj.id_process)
    }
}