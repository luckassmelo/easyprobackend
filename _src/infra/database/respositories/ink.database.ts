import { IinkRepository } from "../../../modules/screensAndInks/inks/repository/register.inks.repository";
import {IGetInksRepository} from "../../../modules/screensAndInks/inks/repository/get.inks.repository"
import PostgresSQLAdapter from "../../../../src/infra/database/PostgreSQLAdapter";
import { InkEntity } from "../../../modules/screensAndInks/inks/entity/ink.entity";


export class inksRepository implements IinkRepository {
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async save(inksRepo: InkEntity): Promise<void> {
        
        
        const inksRegister = await this.adapter.connection("paint.tbl_paints")
                                     .insert({
                                        initial_code: inksRepo.props.initialCodeInk,
                                        medium_code: inksRepo.props.mediumCode,
                                        batch_ink_vendor: inksRepo.props.batchNumberInk,
                                        color_ink: inksRepo.props.colorInk,
                                        batch_number_schott: inksRepo.props.batchNumberSchott,
                                        type_use: inksRepo.props.typeToUse,
                                        manufacture_date_schott: inksRepo.props.preparationDate,
                                        expiration_date_schott: inksRepo.props.validationDateInk,
                                        weight_ink_schott: inksRepo.props.weigthInk,
                                        density: inksRepo.props.analysiDesinty,
                                        viscosity: inksRepo.props.analysiViscosity,
                                        aditional_medium: inksRepo.props.aditionalMedium,
                                        aditional_enamel: inksRepo.props.aditionalEnamel,
                                        batch_number_medium: inksRepo.props.batchNumberMedium,
                                        weight_medium: inksRepo.props.weigthMedium,
                                        manufacture_date_medium: inksRepo.props.fabricationDateMedium,
                                        manufacture_date_ink_vendor: inksRepo.props.fabricationDateInk,
                                        final_code_ink: inksRepo.props.finalCodeInk,
                                        id_site: inksRepo.props.id_site,
                                        id_user: inksRepo.props.id_user
                                     });
                                    
        return inksRegister;
    }

}

export class getAllInksRepository implements IGetInksRepository{
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async getAll(): Promise<InkEntity[] | undefined> {
        const getAllInksRegister = await this.adapter.connection("paint.tbl_paints")
                                                        .select("*")


        return getAllInksRegister;
    }
}