import { IGetErrorRepository } from "../interface/get-error-repository.interface";
import { GetError } from "../models/get-error.model";
import { mockData } from "./mock/log-table.mock";

export class InMemoryRepositoryGetError implements IGetErrorRepository {
    private logs: typeof mockData[];
    constructor(){
        this.logs = []
    }
    
   async findError(requisition: GetError): Promise<any> {
    
    const matchingLog = this.logs.find(item => item.info_log.idReq === requisition.props.id);
    
    if (matchingLog) {
      return matchingLog.info_log.name;
    }
    

    }
};