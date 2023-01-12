import { IWorkCentersRepository } from "../../application/repositories/IWorkCentersRepository";
import PostgresSQLAdapter from "../database/PostgreSQLAdapter";

type WorkCenterProp = {
    area: string;
    machine: string;
    id_oee: number;
    id_site: number;
}

export class WorkCentersRepository implements IWorkCentersRepository {

    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async allWorkCenters(): Promise<Object | null> {
        const result = await this.adapter
                                 .connection
                                 .select(
                                    "area",
                                    "machine",
                                    "id_oee",
                                    "id_site"
                                 )
                                 .fromRaw("monitor.tbl_oee_monitor")
                                 
        const workCenters: {[index: string]: any} = {};

        result.forEach((workCenter: WorkCenterProp) => { 
            let site: string = String(workCenter.id_site);
            let area: string = workCenter.area.replace(/\s/g, '');
            let machine: string = workCenter.machine.replace(/\s/g, '');

            if(!(site in workCenters)) workCenters[site] = {};
            if(!(area in workCenters[site])) workCenters[site][area] = {};

            workCenters[site][area][machine] = workCenter.id_oee;

        });
        
        return workCenters;
    }

}