import {IZebraPrintingRepository} from "../../../modules/screensAndInks/inks/repository/zebra-printing.repository"
import { ZebraPrintingEntity } from "../../../modules/screensAndInks/inks/entity/zebra-printing.entity"
import * as fs from "fs/promises"
import { zplFormatHelper } from "../../../modules/screensAndInks/inks/helpers/zpl-format.helper"
import { zebraPrinter } from "../../../config/config"


export class ZebraPrintingRepository implements IZebraPrintingRepository{
    constructor(){}
    async printing(labelProps: ZebraPrintingEntity): Promise<any> {
        for (let i = 1; i < labelProps.props.labelIndex + 1; i++) {  
            fs.writeFile(`\\\\${zebraPrinter.ip}\\${zebraPrinter.printer}`, zplFormatHelper(labelProps.props, i));
        }        
    }
}