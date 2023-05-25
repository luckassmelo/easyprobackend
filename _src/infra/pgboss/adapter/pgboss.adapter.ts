import PgBoss from "pg-boss";
import { pgBossConnectionString } from "../../../config/config";

export class PgBossAdapter {
  public pgBoss: PgBoss;

  constructor(connectionString: string) {
    console.log(connectionString);

    this.pgBoss = new PgBoss(connectionString);
  }

  async start() {
    await this.pgBoss.start();
  }

  async createJob(jobName: string, data: any): Promise<string | null> {
    return await this.pgBoss.send(jobName, data);
  }

  async close() {
    await this.pgBoss.stop();
  }

  async deleteQueue(name: string): Promise<void> {
    return new Promise((resolve) => {
      resolve(this.pgBoss.deleteQueue(name));
    });
  }
}

export const pgBossConnection = new PgBossAdapter(pgBossConnectionString ?? '');
