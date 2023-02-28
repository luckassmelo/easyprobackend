import { GetMachineEventByDateAndMachineUseCase } from "./GetMachineEventByDateAndMachineUseCase";

type EventProps = {
  date: Date;
  machine: string;
};

export class GetMachineEventByDateAndMachineWithWorkOrderDetailsController {
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
