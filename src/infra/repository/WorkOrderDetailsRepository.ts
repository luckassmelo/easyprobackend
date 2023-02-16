import { IWorkOrderDetailsRepository } from "../../application/repositories/IWorkOrderDetailsRepository";
import { WorkOrderDetails } from "../../domain/entities/WorkOrderDetails";
import Connection from "../database/Connection";
import PostgresSQLAdapter from "../database/PostgreSQLAdapter";
import MSSQLAdapter from "../database/MSSQLAdapter";
import { WorkOrderDetailsProps, WorkOrderMap } from "../../core/types/index";

export class WorkOrderDetailsRepository implements IWorkOrderDetailsRepository {
  constructor(readonly adapter: MSSQLAdapter) {}

  async allWorkOrderDetails(): Promise<WorkOrderDetails[] | null> {
    return this.adapter.connection
      .select(
        this.adapter.connection.raw(
          "PivotT.*, OPERATIONS.SCHEDAREA, replace(RESOURCE_REQUIREMENT_INFO.TEXT, 'DMS_COMMENT','') as TOOL "
        )
      )
      .fromRaw(
        `( 
          
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
          [NECK_DIAMETER])) AS PivotT`
      )
      .leftJoin("CW.OPERATIONS", "PivotT.ORDER_NO", "OPERATIONS.ORDER_NO")
      .leftJoin(
        "CW.RESOURCE_REQUIREMENT_INFO",
        "PivotT.ORDER_NO",
        "RESOURCE_REQUIREMENT_INFO.ORDER_NO"
      )
      .whereLike("RESOURCE_REQUIREMENT_INFO.TEXT", "DMS_COMMENT%")
      .where("PivotT.ORDER_NO", "6105001332");
  }

  async findMany(workOrders: Array<string>): Promise<WorkOrderMap | null> {
    const workOrderDetails: WorkOrderDetailsProps[] = await this.adapter.connection.select(
          this.adapter.connection.raw(
            "PivotT.*, OPERATIONS.SCHEDAREA, ltrim(replace(RESOURCE_REQUIREMENT_INFO.TEXT, 'DMS_COMMENT','')) as TOOL "
          )
        )
        .fromRaw(
          `( 
            
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
            [NECK_DIAMETER])) AS PivotT`
        )
        .leftJoin("CW.OPERATIONS", "PivotT.ORDER_NO", "OPERATIONS.ORDER_NO")
        .joinRaw("LEFT JOIN CW.RESOURCE_REQUIREMENT_INFO ON PivotT.ORDER_NO = RESOURCE_REQUIREMENT_INFO.ORDER_NO AND RESOURCE_REQUIREMENT_INFO.TEXT LIKE 'DMS_COMMENT%'")
        .whereIn("PivotT.ORDER_NO", workOrders)
        .timeout(60000);

    

    return WorkOrderDetails.convertArrayToObject(workOrderDetails);
  }
}
