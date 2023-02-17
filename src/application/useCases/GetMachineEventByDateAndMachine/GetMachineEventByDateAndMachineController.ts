import { Knex } from "knex";
import { GetMachineEventByDateAndMachineUseCase } from "./GetMachineEventByDateAndMachineUseCase";
import { Request } from 'express'

type EventProps = {
  date: Date;
  machine: string;
};

export class GetMachineEventByDateAndMachineController {
  constructor(
    private getMachineEventByDateAndMachineUseCase: GetMachineEventByDateAndMachineUseCase
  ) {}
  async handle(body: EventProps) {

    try {
      const date = body.date;
      const machine = body.machine;    

      return this.getMachineEventByDateAndMachineUseCase.execute(
        date,
        machine
      );
    }catch(error: any) {
      return error;
    }
  }
}
