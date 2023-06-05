import { IinsertFormulaRepository } from "../interface/insert-formula.interface";
import { FormulaInfos } from "../models/insert-formula.model";
import PostgresSQLAdapter from '../../../../../../../src/infra/database/PostgreSQLAdapter';
import { BadRequestError } from "../../../../../../infra/api/errors/bad-request.error";
import { ResponseFormula } from "../types/response-insert-formula.type";


export class InsertFormulaRepository implements IinsertFormulaRepository{
    constructor(private readonly adapter: PostgresSQLAdapter){}

    
    async insertFormulaInfo(formula: FormulaInfos): Promise<ResponseFormula | BadRequestError> {
    
        try{
            await this.adapter.connection('paint.tbl_formula')
                .insert({
                    description: formula.descriptionGetter,
                    sap_material_number: formula.sapNumberGetter,
                    vendor_description: formula.vendorDescGetter,
                    medium_description: formula.mediumDescGetter,
                    id_type: formula.usageTypeGetter,
                    id_color: formula.colorGetter,
                    ink_weight: formula.inkWeightGetter,
                    medium_weight: formula.mediumWeightGetter,
                    min_viscosity: formula.minViscosityGetter,
                    max_viscosity: formula.maxViscosityGetter,
                    min_density: formula.minDensityGetter,
                    max_density: formula.maxDensityGetter,
                    status: formula.statusGetter,
                    site: formula.siteGetter
                });


            return {
                description: `Success with save ${formula.descriptionGetter}` 
            }
    }catch(error){
        throw new BadRequestError();
    }
    }
}