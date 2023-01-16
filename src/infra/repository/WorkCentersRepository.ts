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
                                 .raw(` SELECT
                                            area,
                                            machine,
                                            id_oee,
                                            id_site
                                            
                                        FROM monitor.tbl_oee_monitor
                                        UNION ALL
                                        SELECT
                                            group_target.group_name as area,
                                            monitor.machine,
                                            monitor.id_oee,
                                            group_target.id_site

                                        FROM target.tbl_machine_group as machine_group
                                        INNER JOIN target.tbl_group_target as group_target ON group_target.id_group_target = machine_group.id_group_target 
                                        INNER JOIN monitor.tbl_oee_monitor as monitor ON monitor.id_oee = machine_group.id_machine
                                 `);
                                    
        const workCenters: {[index: string]: any} = {};

        result.rows.forEach((workCenter: WorkCenterProp) => { 
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