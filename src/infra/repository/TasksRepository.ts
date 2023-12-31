import { Knex } from "knex";
import { ITasksRepository } from "../../application/repositories/ITasksRepository";
import { Task } from "../../domain/entities/task";
import PostgresSQLAdapter from "../database/PostgreSQLAdapter";

export class PrismaTasksRepository implements ITasksRepository {
  constructor(readonly adapter: PostgresSQLAdapter) {}

  async save(task: Task): Promise<any | Task> {
    const taskResult = await this.adapter
      .connection("trigger.tbl_trigger_task")
      .insert({
        id_trigger: task.props.triggerId,
        name: task.props.name,
        closed: task.props.closed,
        id_oee: task.props.idOee,
        description: task.props.description,
        id_site: task.props.idSite,
      });

    return taskResult;
  }

  async findById(
    type: string,
    id: string,
    isClosed: boolean
  ): Promise<Task | any> {
    if (type !== "wc" && type !== "group") return null;

    const arrayId = id.split(",");

    const arrayInt = arrayId.map(function (x) {
      return parseInt(x);
    });

    if (type === "group") {
      //group
      return await this.adapter.connection
        .select(
          "trigger.tbl_trigger_task.id",
          "id_trigger",
          "trigger.tbl_trigger_task.name",
          "trigger.tbl_trigger_task.id_user",
          "closed",
          "trigger.tbl_trigger_task.created_at",
          "id_group",
          "group_name",
          "area",
          "description_trigger"
        )
        .from("trigger.tbl_trigger_task ")
        .innerJoin(
          "trigger.tbl_trigger",
          "id_trigger",
          "trigger.tbl_trigger.id"
        )
        .leftJoin(
          "target.tbl_group_target",
          "trigger.tbl_trigger.id_group",
          "target.tbl_group_target.id_group_target"
        )
        .whereIn("target.tbl_group_target.id_group_target", arrayInt)
        .where("trigger.tbl_trigger_task.closed", isClosed);
    }
    //wc
    return await this.adapter.connection
      .select(
        "trigger.tbl_trigger_task.id",
        "id_trigger",
        "trigger.tbl_trigger_task.name",
        "trigger.tbl_trigger_task.id_user",
        "closed",
        "trigger.tbl_trigger_task.created_at",
        "trigger.tbl_trigger_task.id_oee",
        "machine",
        "description_trigger"
      )
      .from("trigger.tbl_trigger_task ")
      .innerJoin("trigger.tbl_trigger", "id_trigger", "trigger.tbl_trigger.id")
      .leftJoin(
        "monitor.tbl_oee_monitor",
        "trigger.tbl_trigger_task.id_oee",
        "monitor.tbl_oee_monitor.id_oee"
      )
      .whereIn("trigger.tbl_trigger_task.id_oee", arrayInt)
      .where("trigger.tbl_trigger_task.closed", isClosed);
  }

  async getAll(): Promise<Task[] | any> {
    return await this.adapter.connection
      .select(
        "trigger.tbl_trigger_task.id",
        "id_trigger",
        "trigger.tbl_trigger_task.name",
        "closed",
        "trigger.tbl_trigger_task.created_at",
        "closed_at",
        "description",
        "trigger.tbl_trigger.id",
        "trigger.tbl_trigger.name",
        "pieces_value",
        "status",
        "id_group",
        "trigger.tbl_trigger.id_user",
        "id_trigger_type",
        "is_productive_time",
        "trigger_priority",
        "trigger.tbl_trigger.id_site",
        "description_trigger"
      )
      .from("trigger.tbl_trigger_task")
      .innerJoin("trigger.tbl_trigger", "id_trigger", "trigger.tbl_trigger.id")
      .where("trigger.tbl_trigger_task.closed", false)
      .orderBy("trigger.tbl_trigger_task.created_at");
  }

  async closedTask(closed: any): Promise<void | any> {
    const closedResult = await this.adapter
    .connection("trigger.tbl_trigger_task")
    .select("id_user")
    .from("users.tbl_users")
    .whereRaw("UPPER(windows_user) = ?", [closed.windowsuser.toUpperCase()]);

    if (closedResult.length) {
      const putDescription = await this.adapter
        .connection("trigger.tbl_trigger_task")
        .where("id", "=", closed.id)
        .update({
          id_user: closedResult[0].id_user,
          description: closed.description,
          closed_at: new Date(),
          closed: true,
        });
      return putDescription;
    } else {
      console.log("usuario nao encontrado");
    }
  }

  async findTaskByIdOee(id: number, closed: boolean): Promise<any> {
    return await this.adapter
      .connection("trigger.tbl_trigger_task")
      .select("*")
      .where("id_oee", id)
      .where('closed', closed);
  }
}
