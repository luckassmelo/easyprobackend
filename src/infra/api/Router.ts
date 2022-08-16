import { createTaskController } from "../../application/useCases/CreateTask/index";
import { createTriggerController } from "../../application/useCases/CreateTrigger/index";
import { findTriggerController } from "../../application/useCases/FindTrigger/index";
import { getAllTriggerController } from "../../application/useCases/GetAllTrigger/index";
import { HttpServer } from "./HttpServer";


export default class Router {
    constructor(
        private httpServer: HttpServer
    ){}

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
    }
}