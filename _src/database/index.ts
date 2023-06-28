import { easyTecConfiguration } from "../config/config";
import MySQLAdapter from "./MySQLAdapter";

const connectionEasyTecManager = new MySQLAdapter(easyTecConfiguration);


export { connectionEasyTecManager };