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
import { getMachineEventByDateAndMachineWithWorkOrderDetailsController } from "../../application/useCases/GetMachineEventByDateAndMachineWithWorkOrderDetails";

import { insertFormulaInfoController} from '../../../_src/modules/screens-and-inks/paint/formula/insert-formula/implementation/insert-formula.impl'
import { ParameterDTO } from '../../../_src/modules/common/get-easypro-parameter/types/param.types';
import { getEasyROParameterController } from '../../../_src/modules/common/get-easypro-parameter/implementation/get-easypro-parameter.impl';
import { getStockInformationController } from "../../../_src/modules/common/sap/get-stock-information/implementation/get-stock-information.impl"
import { postMaterialIMController } from "../../../_src/modules/common/sap/post-material-im/implementations/post-material-im.impl";
import { postMaterialWMController } from "../../../_src/modules/common/sap/post-material-wm/implementation/post-material-wm.impl";
import { createJobController } from "../../../_src/modules/common/queue/create-job/implementation/create-job.impl";
import { updateItemController } from "../../../_src/modules/warehouse/spare-parts/update-item-requisition/implementation/update-item.impl"
import { UpdateItemProp } from "../../../_src/modules/warehouse/spare-parts/update-item-requisition/models/update-item.model";
import { createLogController } from "../../../_src/modules/common/log/create-log/implementation/create-log.imp";
import { getInksColorsController } from "../../../_src/modules/screens-and-inks/paint/formula/get-inks-colors/implementation/get-inks-colors.implementation"

; export default class Router {
  constructor(
    private httpServer: HttpServer,
    private socketServer: SocketAdapter
  ) { }

  async init() {
    this.httpServer.on("post", "/api/trigger", async (params: any, body: any) => {
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

    this.httpServer.on("get", "/api/cronetwork/workOrderDetails", async (params: any, body: any) => {
      return getAllWorkOrderDetailsController.handle();
    });

    this.httpServer.on("post", "/api/cronetwork/workOrderDetails", async (params: any, body: any) => {
      return getWorkOrderDetailsByArrayController.handle(body);
    });

    this.httpServer.on("get", "/api/allServiceInformation", async (params: any, body: any) => {
      return getAllServiceInformationController.handle();
    });

    this.httpServer.on("get", "/api/getMachineEventByDateAndMachine", async (params: any, body: any) => {
      return getMachineEventByDateAndMachineWithWorkOrderDetailsController.handle(params);
    });

    this.socketServer.appSocket.on("connection", (socket: Socket) => {
      getTasksEvent.execute(socket);
    });

    this.httpServer.on("get", "/api/common/get-easypro-parameter", (params: ParameterDTO) => {
      return getEasyROParameterController.handle(params);
    });

    this.httpServer.on("get", "/api/common/sap/get-stock-information", (params: any) => {
      return getStockInformationController.handle(params);
    });

    this.httpServer.on("post", "/api/common/sap/post-material-im", (params: any, body: any) => {
      return postMaterialIMController.handle(body);
    });

    this.httpServer.on("post", "/api/common/sap/post-material-wm", (params: any, body: any) => {
      return postMaterialWMController.handle(body);
    })

    this.httpServer.on("post", "/api/queue/create-job", (params: any, body: any) => {
      return createJobController.handle(body);
    });

    this.httpServer.on('put', '/api/warehouse/spare-parts/update-item-requisition/:idReq', async (params: any, body: UpdateItemProp) => {
      return updateItemController.handle(body, params);
    });

    this.httpServer.on("post", "/api/common/log/create-log", (params: any, body: any) => {
      return createLogController.handle(body);
    });

    this.httpServer.on("post", "/api/screens-and-inks/inks/insert-formula", (params:any, body: any) =>{
      
      return insertFormulaInfoController.handle(body);
    });


    this.httpServer.on("get", "/api/screens-and-inks/paint/formula/get-inks-colors", (params: any) => {
      return getInksColorsController.handle(params);
    });
  }
}
