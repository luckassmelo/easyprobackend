"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class PostgresSQLAdapter {
    constructor(databaseConnection) {
        this.connection = (0, knex_1.default)({
            client: 'pg',
            connection: Object.assign({}, databaseConnection),
            pool: { min: 0, max: 7, },
            // acquireTimeout: 60000 //60 seconds
        });
    }
    query(statement, params) {
        return this.connection.raw(statement, params);
    }
    insert(table, params) {
        return this.connection(table).insert(params);
    }
    close() {
        return this.connection.destroy();
    }
}
exports.default = PostgresSQLAdapter;
//# sourceMappingURL=PostgreSQLAdapter.js.map