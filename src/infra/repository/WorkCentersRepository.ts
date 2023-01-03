import { IWorkCentersRepository } from "../../application/repositories/IWorkCentersRepository";
import PostgresSQLAdapter from "../database/PostgreSQLAdapter";

export class WorkCentersRepository implements IWorkCentersRepository {

    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async allWorkCenters(site: number): Promise<Array<Object> | null> {
        const result = await this.adapter
                                 .connection
                                 .select(this.adapter.connection.raw(`
                                        monitor.tbl_oee_monitor.area, 
                                        jsonb_agg(json_build_object('machine', rtrim(monitor.tbl_oee_monitor.machine), 'id_oee', monitor.tbl_oee_monitor.id_oee)) as machines 
                                    `)
                                 )
                                 .fromRaw("monitor.tbl_oee_monitor ")
                                 .where('monitor.tbl_oee_monitor.id_site', site)
                                 .whereIn('monitor.tbl_oee_monitor.area', ['FRA', 'CAR', 'AMP'])
                                 .groupBy('monitor.tbl_oee_monitor.area');

        return result;
    }

}