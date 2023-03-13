import http from "http";
import { Server } from "socket.io";
import { Express } from "express";
import { HttpServer } from "./HttpServer";

export class SocketAdapter implements HttpServer {
  public appSocket: any;
  public server: any;

  constructor(app: Express) {
    this.server = http.createServer(app);
    this.appSocket = new Server(this.server, {
      cors: {
        origin: "*",
        credentials: false
      },
    });
  }
  on(method: string, url: string, callback: Function): void {
    this.appSocket.addListener(method, callback);
  }

  listen(port: number): void {
    this.server.listen(port, () =>
      console.log("[SOCKET] listening on port", port)
    );
  }
}
