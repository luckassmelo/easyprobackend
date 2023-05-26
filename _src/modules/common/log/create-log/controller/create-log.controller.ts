import { Controller } from '../../../../../presentation/protocols/controller';
import { HttpResponse } from '../../../../../presentation/protocols/http';
import { LogModel } from '../model/log.model';
import { CreateLogUseCase } from '../usecase/create-log.usecase';

type CreateLogProps = {
  processName: string;
  infoLog: any;
};

export class CreateLogController implements Controller {

  constructor(private usecase: CreateLogUseCase) { }

  async handle(props: CreateLogProps): Promise<HttpResponse> {

    const { processName, infoLog } = props;

    const log = new LogModel();
    log.processName = processName;
    log.infoLog = infoLog;

    const response = await this.usecase.execute(log);

    return {
      statusCode: 200,
      response: response,
      message: `Success with creation of log.`
    }
  }

}
