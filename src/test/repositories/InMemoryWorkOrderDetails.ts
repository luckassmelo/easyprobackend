import { IWorkOrderDetailsRepository } from "../../application/repositories/IWorkOrderDetailsRepository";
import { WorkOrderDetailsProps, WorkOrderMap } from "../../core/types";
import { WorkOrderDetails } from "../../domain/entities/WorkOrderDetails";

export class InMemoryWorkOrderDetails implements IWorkOrderDetailsRepository {
  public workOrderDetails: WorkOrderDetails[] = [];

  async allWorkOrderDetails(): Promise<WorkOrderDetails[]> {
    const workOrderDetails: WorkOrderDetails[] = this.workOrderDetails;

    return workOrderDetails;
  }

  async findMany(workOrders: Array<string>): Promise<WorkOrderMap | null> {
    return null;
  }
  
}
