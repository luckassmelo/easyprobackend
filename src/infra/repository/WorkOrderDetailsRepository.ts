import { IWorkOrderDetailsRepository } from "../../application/repositories/IWorkOrderDetailsRepository";
import { WorkOrderDetails } from "../../domain/entities/WorkOrderDetails";
import Connection from "../database/Connection";


export class WorkOrderDetailsRepository implements IWorkOrderDetailsRepository {
    constructor(
        readonly connection: Connection,
    ){}
    
    async allWorkOrderDetails(): Promise<WorkOrderDetails[] | null> {
        return await this.connection.query(`
        SELECT PivotT.*, OPERATIONS.SCHEDAREA, replace(RESOURCE_REQUIREMENT_INFO.TEXT, 'DMS_COMMENT','') as TOOL

        FROM
        
        (
        
            SELECT OP_TECHNOLOGIES.ORDER_NO, OP_TECHNOLOGIES.TECHNOLOGYNO, OP_TECHNOLOGIES.LOWERLIMIT
        
            FROM CW.OP_TECHNOLOGIES
        
        ) AS SourceTable PIVOT(max(LOWERLIMIT) FOR TECHNOLOGYNO IN([CAPACITY_PP],
        
        [MATERIAL_TYPE],
        
        [BREAKABILITY_PP],
        
        [NUMBER_OF_RINGS],
        
        [GLISSE_DEVICE],
        
        [AMMONIUM_SULFATE_DEV],
        
        [OUTER_DIAMETER_BODY],
        
        [PRINTING_PP],
        
        [NECK_DIAMETER])) AS PivotT
        
        LEFT JOIN CW.OPERATIONS on PivotT.ORDER_NO = OPERATIONS.ORDER_NO
        
        LEFT JOIN CW.RESOURCE_REQUIREMENT_INFO on PivotT.ORDER_NO = RESOURCE_REQUIREMENT_INFO.ORDER_NO
        
        WHERE RESOURCE_REQUIREMENT_INFO.TEXT LIKE 'DMS_COMMENT%'
        
        AND PivotT.ORDER_NO in ('6106644060')
        
        `, []);
    }
}