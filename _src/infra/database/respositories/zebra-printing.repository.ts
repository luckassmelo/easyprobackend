import {IZebraPrintingRepository} from "../../../modules/screensAndInks/inks/repository/zebra-printing.repository"
import { ZebraPrintingEntity } from "../../../modules/screensAndInks/inks/entity/zebra-printing.entity"
import * as fs from "fs/promises"
import { zplFormatHelper } from "../../../modules/screensAndInks/inks/helpers/zpl-format.helper"
import { zebraPrinter } from "../../../config/config"
import PostgresSQLAdapter from "../../../../src/infra/database/PostgreSQLAdapter"



export class ZebraPrintingRepository implements IZebraPrintingRepository{
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}
 

    async printing(labelProps: ZebraPrintingEntity): Promise<any> {
        let labelId = await this.adapter.connection
        .orderBy('label_id', 'desc')
        .select('label_id')
        .where('id_process', labelProps.props.idProcess)
        .from('paint.tbl_paint_printing') 

        for (let i = 1; i < labelProps.props.labelIndex + 1; i++) {
            if (!labelId) {
                let labelId = 0
                fs.writeFile(`\\\\${zebraPrinter.ip}\\${zebraPrinter.printer}`, zplFormatHelper(labelProps.props, labelId + i));
                continue;
            }      

            fs.writeFile(`\\\\${zebraPrinter.ip}\\${zebraPrinter.printer}`, zplFormatHelper(labelProps.props, labelId[0]['label_id'] + i));
        }        
    }
}
