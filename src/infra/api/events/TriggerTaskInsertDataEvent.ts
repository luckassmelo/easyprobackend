import { PrismaTasksRepository } from "../../repository/TasksRepository";
import { PgAdapter } from "../../database/PgAdapter";
import { SocketAdapter } from "../SocketAdapter";

export class TriggerTaskInsertDataEvent {
  constructor(
    private pgAdapter: PgAdapter,
    private tasksRepository: PrismaTasksRepository
  ) {}

  execute(socket: SocketAdapter) {
    this.pgAdapter.connection.connect().then((client: any) => {
      client.query("LISTEN trigger_insert_notify");
      client.on("notification", (response: any) => {
        const data = JSON.parse(response.payload);

        if (response.channel === "trigger_insert_notify") {
          Promise.all([
            this.tasksRepository.findTaskByIdOee(data.id_oee, false),
            this.tasksRepository.findTaskByIdOee(data.id_oee, true),
          ]).then((response) => {
            socket.appSocket
              .to(`${data.id_site}:${data.id_oee}`)
              .emit("GetTasks", {
                tasks: {
                  opened: response[0],
                  closed: response[1],
                },
              });
          });
        }
      });
    });
  }
}
