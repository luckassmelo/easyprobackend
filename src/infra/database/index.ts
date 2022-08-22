import { cronetwork, passMdcPPB, productionManager } from "../../config/database";
import MSSQLAdapter from "./MSSQLAdapter";
import PostgresSQLAdapter from "./PostgreSQLAdapter";


const connectionMdcPPB = new PostgresSQLAdapter(passMdcPPB);
const connectionProductionManager = new PostgresSQLAdapter(productionManager);
const connectionCronetwork = new MSSQLAdapter(cronetwork);



export { connectionMdcPPB, connectionProductionManager, connectionCronetwork };