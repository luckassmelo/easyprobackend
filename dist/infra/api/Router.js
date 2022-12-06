"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../application/useCases/CreateTask/index");
const index_2 = require("../../application/useCases/CreateTrigger/index");
const index_3 = require("../../application/useCases/FindTrigger/index");
const index_4 = require("../../application/useCases/GetAllMachineEvent/index");
const index_5 = require("../../application/useCases/GetAllServiceInformation/index");
const index_6 = require("../../application/useCases/GetAllTrigger/index");
const index_7 = require("../../application/useCases/GetAllWorkOrderDetails/index");
const index_8 = require("../../application/useCases/GetWorkOrderDetailsByArray/index");
const index_9 = require("../../application/useCases/GetAllTask/index");
const index_10 = require("../../application/useCases/FindTaskMachine/index");
class Router {
    constructor(httpServer) {
        this.httpServer = httpServer;
    }
    async init() {
        this.httpServer.on("post", "/api/trigger", async (params, body) => {
            return index_2.createTriggerController.handle(body);
        });
        this.httpServer.on("get", "/api/trigger/:triggerId", async (params, body) => {
            return index_3.findTriggerController.handle(params);
        });
        this.httpServer.on("get", "/api/trigger", async (params, body) => {
            return index_6.getAllTriggerController.handle();
        });
        this.httpServer.on("post", "/api/task", async (params, body) => {
            return index_1.createTaskController.handle(body);
        });
        this.httpServer.on("get", "/api/task", async (params, body) => {
            return index_9.getAllTaskController.handle();
        });
        this.httpServer.on("get", "/api/task/:type/:paramId/:isClosed", async (params, body) => {
            return index_10.findTaskMachineController.handle(params);
        });
        this.httpServer.on("get", "/api/pass/machineEvent", async (params, body) => {
            return index_4.getAllMachineEventController.handle();
        });
        this.httpServer.on("get", "/api/cronetwork/workOrderDetails", async (params, body) => {
            return index_7.getAllWorkOrderDetailsController.handle();
        });
        this.httpServer.on("post", "/api/cronetwork/workOrderDetails", async (params, body) => {
            return index_8.getWorkOrderDetailsByArrayController.handle(body);
        });
        this.httpServer.on("get", "/api/allServiceInformation", async (params, body) => {
            return index_5.getAllServiceInformationController.handle();
        });
    }
}
exports.default = Router;
//# sourceMappingURL=Router.js.map