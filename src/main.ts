import { ExpressAdapter } from "./infra/api/ExpressAdapter";
import { SocketAdapter } from "./infra/api/SocketAdapter";
import Router from "./infra/api/Router";
import { triggerTaskInsertDataEvent } from "./infra/api/events";

const httpServer = new ExpressAdapter();
const socketServer = new SocketAdapter(httpServer.app);
const router = new Router(httpServer, socketServer);

triggerTaskInsertDataEvent.execute(socketServer);

socketServer.listen(4040);
httpServer.listen(4000);
router.init();
