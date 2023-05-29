import PgBoss from "pg-boss";
import { pgBossConnectionString } from "../../../config/config";

export class PgBossConnectionSingleton {
  private static instance: PgBossConnectionSingleton;
  public pgBoss: PgBoss;

  private constructor(connectionString: string) {
    console.log(connectionString);

    this.pgBoss = new PgBoss(connectionString);
  }

  public static async getInstance(): Promise<PgBossConnectionSingleton> {
    if (!PgBossConnectionSingleton.instance) {
      PgBossConnectionSingleton.instance = new PgBossConnectionSingleton(pgBossConnectionString ?? '');
      await PgBossConnectionSingleton.instance.start();
    }
    return PgBossConnectionSingleton.instance;
  }

  private async start() {
    await this.pgBoss.start();
  }

  async createJob(jobName: string, data: any): Promise<string | null> {
    return await this.pgBoss.send(jobName, data);
  }

  private async close() {
    await this.pgBoss.stop();
  }

  async deleteQueue(name: string): Promise<void> {
    return new Promise((resolve) => {
      resolve(this.pgBoss.deleteQueue(name));
    });
  }
}
