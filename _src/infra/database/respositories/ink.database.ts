import { IinkRepository } from "../../../modules/screensAndInks/inks/repository/register.inks.repository";
import {IGetInksRepository} from "../../../modules/screensAndInks/inks/repository/get.inks.repository"
import PostgresSQLAdapter from "../../../../src/infra/database/PostgreSQLAdapter";
import { InkEntity } from "../../../modules/screensAndInks/inks/entity/ink.entity";
import {InkDataToTableAdapter} from "../../../modules/screensAndInks/inks/adapters/ink.get.data.from.table"
import { InkGetProcess } from "../../../modules/screensAndInks/inks/entity/ink.get.process.entity";


export class inksRepository implements IinkRepository {
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async save(inksRepo: InkEntity): Promise<void> {
  
        await this.adapter.connection("paint.tbl_paints")
                                     .insert({
                                        initial_code: inksRepo.props.initialCodeInk,
                                        medium_code: inksRepo.props.codeMedium,
                                        batch_ink_vendor: inksRepo.props.batchNumberInk,
                                        color_ink: inksRepo.props.colorInk,
                                        batch_number_schott: inksRepo.props.batchNumberSchott,
                                        type_use: inksRepo.props.typeToUse,
                                        manufacture_date_schott: inksRepo.props.preparationDate,
                                        expiration_date_schott: inksRepo.props.validationDateInk,
                                        weight_ink_schott: inksRepo.props.weightInk,
                                        density: inksRepo.props.analysisDesinty,
                                        viscosity: inksRepo.props.analysisViscosity,
                                        aditional_medium: inksRepo.props.aditionalMedium,
                                        aditional_enamel: inksRepo.props.aditionalEnamel,
                                        batch_number_medium: inksRepo.props.batchNumberMedium,
                                        weight_medium: inksRepo.props.weightMedium,
                                        manufacture_date_medium: inksRepo.props.fabricationDateMedium,
                                        manufacture_date_ink_vendor: inksRepo.props.fabricationDateInk,
                                        final_code_ink: inksRepo.props.finalCodeInk,
                                        id_site: inksRepo.props.idSite,
                                        id_user: inksRepo.props.idUser
                                     });
                                    
    }

}

export class getAllInksRepository implements IGetInksRepository{
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async getAll(): Promise<InkGetProcess[]> {
        const getAllInksRegister = await
        this.adapter.connection.select("manufacture_date_schott","batch_number_schott","initial_code", "final_code_ink", "color_ink", "type_use", "id_process")
         .from<InkGetProcess>("paint.tbl_paints")
                                                        
        return getAllInksRegister.map(items =>
            InkDataToTableAdapter.returnData(items)
        );
    }
}
