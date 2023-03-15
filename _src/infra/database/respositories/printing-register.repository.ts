import { IPrintingRepository } from "../../../modules/screensAndInks/inks/repository/printing-label.repository";
import PostgresSQLAdapter from "../../../../src/infra/database/PostgreSQLAdapter";
import { PrintingEntity } from "../../../modules/screensAndInks/inks/entity/printing.entity";

export class PrintingRegisterRepository implements IPrintingRepository{
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async printing(printRepo: PrintingEntity[]): Promise<any>{
         let searchLabelId = await this.adapter.connection
         .orderBy('label_id', 'desc')
         .select('label_id')
         .where('id_process', Number(printRepo[0].id['idProcess']))
         .from("paint.tbl_paint_printing")
         .first()
         
         if(!searchLabelId){
          searchLabelId = 0
          const incrementingData = printRepo.map((obj, index)=>({
            id_process:Number(obj.id['idProcess']),
            label_id: searchLabelId + 1 + index,
            id_site: obj.props['idSite'],
            user_printing: obj.props['userPrinting'],
            status: obj.props['status']
        }));

        await this.adapter.connection
            ('paint.tbl_paint_printing')
            .insert(incrementingData)
         } 
         else{ 
            const incrementingDataExist = printRepo.map((obj, index)=>({
                id_process:Number(obj.id['idProcess']),
                label_id: searchLabelId['label_id'] + 1 + index,
                id_site: obj.props['idSite'],
                user_printing: obj.props['userPrinting'],
                status: obj.props['status']
            }));

         await this.adapter.connection
            ('paint.tbl_paint_printing')
            .insert(incrementingDataExist)
         } 
    }
}


