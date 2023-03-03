import { Socket } from "socket.io";
import { GetTasksByIdOeeController } from "../../../application/useCases/GetTasksByIdOee/GetTasksByIdOeeController";

export class GetTasksEvent {
  constructor(private getTasksByIdOeeController: GetTasksByIdOeeController) {}

  execute(socket: Socket) {
    const query = socket.handshake.query;
    const roomName: string =
      typeof query.roomName === "string" ? query.roomName : "";
    const idOee: number =
      typeof query.idOee === "string" ? Number(query.idOee) : 0;

    if (
      roomName.indexOf("undefined:undefined") > -1 ||
      isNaN(idOee) ||
      !idOee
    ) {
      socket.emit("GetTasks", {
        tasks: {
          opened: [],
          closed: [],
        },
      });

      return;
    }

    socket.join(roomName);

    Promise.all([
      this.getTasksByIdOeeController.handle(idOee, false),
      this.getTasksByIdOeeController.handle(idOee, true),
    ]).then((response: any) =>
      socket.emit("GetTasks", {
        tasks: {
          opened: response[0],
          closed: response[1],
        },
      })
    );
  }
}
