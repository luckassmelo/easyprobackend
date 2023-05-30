import PgBoss from "pg-boss";
import { pgBossConnectionString } from "../../../config/config";
import { createLogController } from '../../../modules/common/log/create-log/implementation/create-log.imp';

export class PgBossConnectionSingleton {
  private static instance: PgBossConnectionSingleton;
  public pgBoss: PgBoss;

  private constructor(connectionString: string) {

    this.pgBoss = new PgBoss(connectionString);
    this.pgBoss.on('error', (error) => {
      createLogController.handle({
        processName: 'PgBossConnectionSingleton',
        infoLog: {
          message: 'Error to connect with pgBoss',
          data: error
        }
      });
      this.close();
    });
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
