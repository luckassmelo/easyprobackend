"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkOrderDetailsRepository = void 0;
const WorkOrderDetails_1 = require("../../domain/entities/WorkOrderDetails");
class WorkOrderDetailsRepository {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async allWorkOrderDetails() {
        return this.adapter.connection
            .select(this.adapter.connection.raw("PivotT.*, OPERATIONS.SCHEDAREA, replace(RESOURCE_REQUIREMENT_INFO.TEXT, 'DMS_COMMENT','') as TOOL "))
            .fromRaw(`( 
          
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
          [NECK_DIAMETER])) AS PivotT`)
            .leftJoin("CW.OPERATIONS", "PivotT.ORDER_NO", "OPERATIONS.ORDER_NO")
            .leftJoin("CW.RESOURCE_REQUIREMENT_INFO", "PivotT.ORDER_NO", "RESOURCE_REQUIREMENT_INFO.ORDER_NO")
            .whereLike("RESOURCE_REQUIREMENT_INFO.TEXT", "DMS_COMMENT%")
            .where("PivotT.ORDER_NO", "6105001332");
    }
    async findMany(workOrders) {
        //isolation level
        // await this.adapter.connection.raw("SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED");
        const workOrderDetails = await this.adapter.connection(this.adapter.connection.raw("PivotT.*, OPERATIONS.SCHEDAREA, replace(RESOURCE_REQUIREMENT_INFO.TEXT, 'DMS_COMMENT','') as TOOL "))
            .fromRaw(`( 
            
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
            [NECK_DIAMETER])) AS PivotT`)
            .leftJoin("CW.OPERATIONS", "PivotT.ORDER_NO", "OPERATIONS.ORDER_NO")
            .joinRaw("LEFT JOIN CW.RESOURCE_REQUIREMENT_INFO ON PivotT.ORDER_NO = RESOURCE_REQUIREMENT_INFO.ORDER_NO AND RESOURCE_REQUIREMENT_INFO.TEXT LIKE 'DMS_COMMENT%'")
            .whereIn("PivotT.ORDER_NO", workOrders)
            .timeout(60000);
        return WorkOrderDetails_1.WorkOrderDetails.convertArrayToObject(workOrderDetails);
    }
}
exports.WorkOrderDetailsRepository = WorkOrderDetailsRepository;
//# sourceMappingURL=WorkOrderDetailsRepository.js.map