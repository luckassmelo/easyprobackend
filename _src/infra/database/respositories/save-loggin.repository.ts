import {connectionProductionManager} from "../../../../src/infra/database"
import PostgresSQLAdapter from "../../../../src/infra/database/PostgreSQLAdapter";
import { ILogginDecorator } from "../../../domain/interface/ILogginDecorator.interface";


class SaveGenericLog implements ILogginDecorator{
        constructor(
            readonly adapter: PostgresSQLAdapter
        ){}
    public async saveLog(infoLog: JSON, processName: string): Promise<void>{
        await this.adapter.connection('general.tbl_logs').insert({
            info_log: infoLog,
            process_name: processName
        });
    };
};
const saveGenericLoggin = new SaveGenericLog(connectionProductionManager)

export {saveGenericLoggin}