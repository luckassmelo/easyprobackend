import { MachineEvent } from "../../domain/entities/machineEvent";
import { IMachineEventsRepository } from "../../application/repositories/IMachineEventsRepository";
import Connection from "../database/Connection";


export class MachineEventsRepository implements IMachineEventsRepository {

    constructor(
        readonly connection: Connection
    ){}

    async allMachineEvents(): Promise<MachineEvent[]> {
        return MachineEvent.convertArrayToObject((await this.connection.query(`
                    SELECT  ev.ev_time as eventDate, 
                            typ.typ_name as eventName, 
                            pu.pu_no as machine,
                            ord.ord_no as workorder,
                            rs.rs_no as statusCode,
                            rs.rs_name as statusReason,
                            vai.vai_name,
                            vav.vav_num_value as value

                    FROM indit_ps_event ev

                    INNER JOIN PASS.indit_ps_type typ on ev.fk_type = typ.typ_id
                    INNER JOIN PASS.indit_ps_run run on ev.fk_run = run.run_id 
                    INNER JOIN PASS.indit_ps_produnit pu on run.fk_produnit = pu.pu_id

                    LEFT OUTER JOIN PASS.indit_ps_run_pcs rp on rp.fk_run = run.run_id 
                    LEFT OUTER JOIN PASS.indit_ps_process pcs on rp.fk_process = pcs.pcs_id
                    LEFT OUTER JOIN PASS.indit_ps_order ord on pcs.fk_order = ord.ord_id

                    LEFT OUTER JOIN PASS.indit_ps_ev_rs ev_rs on ev_rs.fk_event = ev.ev_id
                    LEFT OUTER JOIN PASS.indit_ps_reason rs on ev_rs.fk_reason = rs.rs_id

                    LEFT OUTER JOIN PASS.indit_ps_var_val vav on vav.fk_event = ev.ev_id  
                    LEFT OUTER JOIN PASS.indit_ps_var_item vai on vav.fk_var_item = vai.vai_id 

                    WHERE ev_made_historic is null

                    AND ev_time >= now() - interval '10 minutes'

                    AND typ_name = 'COUNTER_READING' AND vai_name = 'C10130'

                    ORDER BY ev.ev_time DESC, pu.pu_id, typ_id, machine
        `, [])).rows);
    }
}