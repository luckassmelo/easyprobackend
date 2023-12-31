import { IMachineEventsRepository } from "../../application/repositories/IMachineEventsRepository";
import Connection from "../database/Connection";
import PostgresSQLAdapter from "../database/PostgreSQLAdapter";
import { MachineEventProps, MachineEventResponse } from "../../core/types/index";

export class MachineEventsRepository implements IMachineEventsRepository {
  constructor(readonly adapter: PostgresSQLAdapter) {}

  async allMachineEvents(): Promise<MachineEventProps[]> {
    return (await this.adapter.connection
            .select(
              { eventDate: "ev.ev_time" },
              { eventName: "typ.typ_name" },
              { machine: "pu.pu_no" },
              { workorder: "ord.ord_no" },
              { statusCode: "rs.rs_no" },
              { statusReason: "rs.rs_name" },
              { name: "vai.vai_name" },
              { value: "vav.vav_num_value" }
            )

            .from("indit_ps_event as ev")

            .innerJoin("indit_ps_type as typ", "ev.fk_type", "=", "typ.typ_id")
            .innerJoin("indit_ps_run as run", "ev.fk_run", "=", "run.run_id")
            .innerJoin("indit_ps_produnit as pu", "run.fk_produnit", "=","pu.pu_id")

            .leftOuterJoin("indit_ps_run_pcs as rp", "rp.fk_run", "=", "run.run_id")
            .leftOuterJoin("indit_ps_process as pcs", "rp.fk_process", "=", "pcs.pcs_id")
            .leftOuterJoin("indit_ps_order as ord", "pcs.fk_order", "=", "ord.ord_id")

            .leftOuterJoin("indit_ps_ev_rs as ev_rs","ev_rs.fk_event", "=", "ev.ev_id")
            .leftOuterJoin("indit_ps_reason as rs","ev_rs.fk_reason", "=", "rs.rs_id")

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
            );
  }

  async downtimesMachineEvents(): Promise<MachineEventProps[]> {
      return (await this.adapter.connection
        .select(
          { eventDate: "ev.ev_time" },
          { eventName: "typ.typ_name" },
          { machine: "pu.pu_no" },
          { workorder: "ord.ord_no" },
          { statusCode: "rs.rs_no" },
          { statusReason: "rs.rs_name" },
          { name: "vai.vai_name" },
          { value: "vav.vav_num_value" }
        )

        .from("indit_ps_event as ev")

        .innerJoin("indit_ps_type as typ", "ev.fk_type", "=", "typ.typ_id")
        .innerJoin("indit_ps_run as run", "ev.fk_run", "=", "run.run_id")
        .innerJoin("indit_ps_produnit as pu", "run.fk_produnit", "=","pu.pu_id")

        .leftOuterJoin("indit_ps_run_pcs as rp", "rp.fk_run", "=", "run.run_id")
        .leftOuterJoin("indit_ps_process as pcs", "rp.fk_process", "=", "pcs.pcs_id")
        .leftOuterJoin("indit_ps_order as ord", "pcs.fk_order", "=", "ord.ord_id")

        .leftOuterJoin("indit_ps_ev_rs as ev_rs","ev_rs.fk_event", "=", "ev.ev_id")
        .leftOuterJoin("indit_ps_reason as rs","ev_rs.fk_reason", "=", "rs.rs_id")

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

  async getMachineEventsByDateAndMachine(date: Date, machine: String): Promise<MachineEventProps[]> { 
    const knex =  this.adapter.connection
      return await knex
      .select(
        knex.raw(`(ev.ev_time::timestamptz AT TIME ZONE 'UTC')::text || '+00' as "eventDate"`),
        { eventName: "typ.typ_name" },
        { machine: "pu.pu_no" },
        { workorder: "ord.ord_no" },
        { statusCode: "rs.rs_no" },
        { statusReason: "rs.rs_name" },
        { name: "vai.vai_name" },
        knex.raw(`CASE WHEN "vai"."vai_name" = 'ERP_FEEDBACK_DONE' THEN 0 ELSE "vav"."vav_num_value" END AS "value", 1 as sort_order`),
      )
    .from("indit_ps_event as ev")
    .innerJoin("indit_ps_type as typ", "ev.fk_type", "=", "typ.typ_id")
    .innerJoin("indit_ps_run as run", "ev.fk_run", "=", "run.run_id")
    .innerJoin("indit_ps_produnit as pu", "run.fk_produnit", "=","pu.pu_id")
  
    .leftOuterJoin("indit_ps_run_pcs as rp", "rp.fk_run", "=", "run.run_id")
    .leftOuterJoin("indit_ps_process as pcs", "rp.fk_process", "=", "pcs.pcs_id")
    .leftOuterJoin("indit_ps_order as ord", "pcs.fk_order", "=", "ord.ord_id")
  
    .leftOuterJoin("indit_ps_ev_rs as ev_rs","ev_rs.fk_event", "=", "ev.ev_id")
    .leftOuterJoin("indit_ps_reason as rs","ev_rs.fk_reason", "=", "rs.rs_id")
  
    .leftOuterJoin("indit_ps_var_val as vav", "vav.fk_event", "=", "ev.ev_id")
    .leftOuterJoin("indit_ps_var_item as vai", "vav.fk_var_item", "=", "vai.vai_id")
  
    .whereRaw(`
                (ev_time <= '${date}')
                and typ_name = 'MACHINE_STATE_CHANGE'
                and pu.pu_no = '${machine}'
                order by pu.pu_no, ev.ev_time DESC LIMIT 1
                `)
    .unionAll(
        knex
              .select(
                knex.raw(`(ev.ev_time::timestamptz AT TIME ZONE 'UTC')::text || '+00' as "eventDate"`),
                { eventName: "typ.typ_name" },
                { machine: "pu.pu_no" },
                { workorder: "ord.ord_no" },
                { statusCode: "rs.rs_no" },
                { statusReason: "rs.rs_name" },
                { name: "vai.vai_name" },
                knex.raw(`CASE WHEN "vai"."vai_name" = 'ERP_FEEDBACK_DONE' THEN 0 ELSE "vav"."vav_num_value" END AS "value", 2 as sort_order`),
              )
            .from("indit_ps_event as ev")
            .innerJoin("indit_ps_type as typ", "ev.fk_type", "=", "typ.typ_id")
            .innerJoin("indit_ps_run as run", "ev.fk_run", "=", "run.run_id")
            .innerJoin("indit_ps_produnit as pu", "run.fk_produnit", "=","pu.pu_id")
  
            .leftOuterJoin("indit_ps_run_pcs as rp", "rp.fk_run", "=", "run.run_id")
            .leftOuterJoin("indit_ps_process as pcs", "rp.fk_process", "=", "pcs.pcs_id")
            .leftOuterJoin("indit_ps_order as ord", "pcs.fk_order", "=", "ord.ord_id")
  
            .leftOuterJoin("indit_ps_ev_rs as ev_rs","ev_rs.fk_event", "=", "ev.ev_id")
            .leftOuterJoin("indit_ps_reason as rs","ev_rs.fk_reason", "=", "rs.rs_id")
  
            .leftOuterJoin("indit_ps_var_val as vav", "vav.fk_event", "=", "ev.ev_id")
            .leftOuterJoin("indit_ps_var_item as vai", "vav.fk_var_item", "=", "vai.vai_id")
  
            .where({ ev_made_historic: null })
  
            .whereRaw(`
                        (ev_time > '${date}')
                        and ((typ_name = 'COUNTER_READING'
                        and (vai_name = 'C10110' OR vai_name = 'C10120')) OR typ_name = 'MACHINE_STATE_CHANGE')`)
            .where("pu.pu_no", machine)
  
            .orderBy([
              { column: "ev.ev_time",},
              { column: "pu.pu_id"},
              { column: "typ_id"},
              { column: "machine"},
            ]), true)
  }

}
