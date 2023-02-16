import { Pool } from "pg";
import type { Pool as PoolConnection } from "pg";

type ConfigProps = {
  user: string;
  password: string;
  host: string;
  db: string;
  table: string;
};

export class PgAdapter {
  connection: PoolConnection;
  constructor(config: ConfigProps) {
    const pool = new Pool({
      connectionString: `postgres://${config.user}:${config.password}@${config.host}/${config.db}`,
    });

    this.connection = pool;
  }
}
