import { cronetwork, passMdcPPB, productionManager, ldap } from "../../config/database";
import LdapAdapter from "./LdapAdapter";
import MSSQLAdapter from "./MSSQLAdapter";
import PostgresSQLAdapter from "./PostgreSQLAdapter";



const connectionMdcPPB = new PostgresSQLAdapter(passMdcPPB);
const connectionProductionManager = new PostgresSQLAdapter(productionManager);
const connectionCronetwork = new MSSQLAdapter(cronetwork);
const ConnectionLdap = new LdapAdapter(ldap);


export { connectionMdcPPB, connectionProductionManager, connectionCronetwork, ConnectionLdap};