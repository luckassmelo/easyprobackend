"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineEventsRepository = void 0;
class MachineEventsRepository {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async allMachineEvents() {
        return (await this.adapter.connection
            .select({ eventDate: "ev.ev_time" }, { eventName: "typ.typ_name" }, { machine: "pu.pu_no" }, { workorder: "ord.ord_no" }, { statusCode: "rs.rs_no" }, { statusReason: "rs.rs_name" }, { name: "vai.vai_name" }, { value: "vav.vav_num_value" })
            .from("indit_ps_event as ev")
            .innerJoin("indit_ps_type as typ", "ev.fk_type", "=", "typ.typ_id")
            .innerJoin("indit_ps_run as run", "ev.fk_run", "=", "run.run_id")
            .innerJoin("indit_ps_produnit as pu", "run.fk_produnit", "=", "pu.pu_id")
            .leftOuterJoin("indit_ps_run_pcs as rp", "rp.fk_run", "=", "run.run_id")
            .leftOuterJoin("indit_ps_process as pcs", "rp.fk_process", "=", "pcs.pcs_id")
            .leftOuterJoin("indit_ps_order as ord", "pcs.fk_order", "=", "ord.ord_id")
            .leftOuterJoin("indit_ps_ev_rs as ev_rs", "ev_rs.fk_event", "=", "ev.ev_id")
            .leftOuterJoin("indit_ps_reason as rs", "ev_rs.fk_reason", "=", "rs.rs_id")
            .leftOuterJoin("indit_ps_var_val as vav", "vav.fk_event", "=", "ev.ev_id")
            .leftOuterJoin("indit_ps_var_item as vai", "vav.fk_var_item", "=", "vai.vai_id")
            .where({ ev_made_historic: null })
            .whereRaw("ev_time > now() - interval '10 minutes'")
            .whereRaw("(typ_name = 'COUNTER_READING' AND vai_name = 'C10130' OR typ_name = 'MACHINE_STATE_CHANGE')")
            .orderBy([
            { column: "ev.ev_time", order: "desc" },
            { column: "pu.pu_id" },
            { column: "typ_id" },
            { column: "machine" },
        ])
            .timeout(60000));
    }
    async downtimesMachineEvents() {
        return (await this.adapter.connection
            .select({ eventDate: "ev.ev_time" }, { eventName: "typ.typ_name" }, { machine: "pu.pu_no" }, { workorder: "ord.ord_no" }, { statusCode: "rs.rs_no" }, { statusReason: "rs.rs_name" }, { name: "vai.vai_name" }, { value: "vav.vav_num_value" })
            .from("indit_ps_event as ev")
            .innerJoin("indit_ps_type as typ", "ev.fk_type", "=", "typ.typ_id")
            .innerJoin("indit_ps_run as run", "ev.fk_run", "=", "run.run_id")
            .innerJoin("indit_ps_produnit as pu", "run.fk_produnit", "=", "pu.pu_id")
            .leftOuterJoin("indit_ps_run_pcs as rp", "rp.fk_run", "=", "run.run_id")
            .leftOuterJoin("indit_ps_process as pcs", "rp.fk_process", "=", "pcs.pcs_id")
            .leftOuterJoin("indit_ps_order as ord", "pcs.fk_order", "=", "ord.ord_id")
            .leftOuterJoin("indit_ps_ev_rs as ev_rs", "ev_rs.fk_event", "=", "ev.ev_id")
            .leftOuterJoin("indit_ps_reason as rs", "ev_rs.fk_reason", "=", "rs.rs_id")
            .leftOuterJoin("indit_ps_var_val as vav", "vav.fk_event", "=", "ev.ev_id")
            .leftOuterJoin("indit_ps_var_item as vai", "vav.fk_var_item", "=", "vai.vai_id")
            .where({ ev_made_historic: null })
            .whereRaw("ev_time > now() - interval '10 minutes'")
            .where("typ_name", 'MACHINE_STATE_CHANGE')
            .orderBy([
            { column: "ev.ev_time", order: "desc" },
            { column: "pu.pu_id" },
            { column: "typ_id" },
            { column: "machine" },
        ])
            .timeout(60000));
    }
}
exports.MachineEventsRepository = MachineEventsRepository;
//# sourceMappingURL=MachineEventsRepository.js.map