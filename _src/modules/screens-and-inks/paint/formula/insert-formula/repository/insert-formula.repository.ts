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
                    description: formula.description,
                    sap_material_number: formula.sapNumber,
                    vendor_description: formula.vendorDesc,
                    medium_description: formula.mediumDesc,
                    id_type: formula.usageType,
                    id_color: formula.color,
                    ink_weight: formula.inkWeight,
                    medium_weight: formula.mediumWeight,
                    min_viscosity: formula.minViscosity,
                    max_viscosity: formula.maxViscosity,
                    min_density: formula.minDensity,
                    max_density: formula.maxDensity,
                    status: formula.status,
                    site: formula.site
                });


            return {
                description: `Success with save ${formula.description}` 
            }
    }catch(error){
        throw new BadRequestError();
    }
    }
}