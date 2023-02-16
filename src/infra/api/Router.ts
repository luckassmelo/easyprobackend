import { createTaskController } from "../../application/useCases/CreateTask/index";
import { createTriggerController } from "../../application/useCases/CreateTrigger/index";
import { findTriggerController } from "../../application/useCases/FindTrigger/index";
import { getAllMachineEventController } from "../../application/useCases/GetAllMachineEvent/index";
import { getAllServiceInformationController } from "../../application/useCases/GetAllServiceInformation/index";
import { getAllTriggerController } from "../../application/useCases/GetAllTrigger/index";
import { getAllWorkOrderDetailsController } from "../../application/useCases/GetAllWorkOrderDetails/index";
import { getWorkOrderDetailsByArrayController } from "../../application/useCases/GetWorkOrderDetailsByArray/index";
import { getAllTaskController } from "../../application/useCases/GetAllTask/index";
import { findTaskMachineController } from "../../application/useCases/FindTaskMachine/index";
import { loginController } from "../../application/useCases/Login/index";
import { closedTaskController } from "../../application/useCases/ClosedTask/index";
import { HttpServer } from "./HttpServer";
import { SocketAdapter } from "./SocketAdapter";
import { Socket } from "socket.io";
import { getTasksByIdOeeController } from "../../application/useCases/GetTasksByIdOee";
import { getTasksEvent, triggerTaskInsertDataEvent } from "./events";


export default class Router {
    constructor(
        private httpServer: HttpServer,
        private socketServer: SocketAdapter
    ){}

    async init() {
        this.httpServer.on("post", "/api/trigger",  async (params: any, body: any) => {
            return createTriggerController.handle(body);
        }); 
        
        this.httpServer.on("get", "/api/trigger/:triggerId", async (params: any, body: any) => {
            return findTriggerController.handle(params)
        });

        this.httpServer.on("get", "/api/trigger", async (params: any, body: any) => {
            return getAllTriggerController.handle();
        });

        this.httpServer.on("post", "/api/task", async (params: any, body: any) => {
            return createTaskController.handle(body);
        });

        this.httpServer.on("get", "/api/task", async (params: any, body: any) => {
            return getAllTaskController.handle();
        });

        this.httpServer.on("get", "/api/task/:type/:paramId/:isClosed", async (params: any, body: any) => { //wc workCenter ou group 
            return findTaskMachineController.handle(params)
        });

        this.httpServer.on("post", "/api/task/closed", async (params: any, body: any) => {
            return closedTaskController.handle(body);
        });

        this.httpServer.on("get", "/api/pass/machineEvent", async (params: any, body: any) => {
           return getAllMachineEventController.handle(); 
        });
        
        this.httpServer.on("post", "/api/token", async (params: any, body: any) => { 
            return loginController.handle(body)
        });

        this.httpServer.on("get", "/api/cronetwork/workOrderDetails", async(params: any, body: any) => {
            return getAllWorkOrderDetailsController.handle();
        });

        this.httpServer.on("post", "/api/cronetwork/workOrderDetails", async(params: any, body: any) => {
            return getWorkOrderDetailsByArrayController.handle(body);
        });

        this.httpServer.on("get", "/api/allServiceInformation", async(params: any, body: any) => {            
            return getAllServiceInformationController.handle();
        });

        this.socketServer.appSocket.on("connection", (socket: Socket) => {
          getTasksEvent.execute(socket);
      });
    }
}