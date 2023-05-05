import { SAPRequest } from '../models/sap-request.entity';
import { GetStockInformationUseCase } from '../usecases/get-stock-information.usecase';
import { GenericError } from '../../../../../infra/api/errors/generic.error';
import { HttpResponse } from '../../../../../presentation/protocols/http';
import { Controller } from '../../../../../presentation/protocols/controller';

type EnvironmentTypes = "IM" | "WM";

type SAPDTO = {
  type: EnvironmentTypes;
  orderBy?: string;
  filter: string;
}

export class GetStockInformationController implements Controller {
  constructor(private readonly getStockInformationUseCase: GetStockInformationUseCase) { }

  async handle(request: SAPDTO): Promise<HttpResponse> {
    const { filter, orderBy } = request;
    let type = request.type.toUpperCase();

    if (type !== "IM" && type !== "WM") {
      throw new GenericError("Invalid type", "The type must be IM or WM", 400);
    }

    if (!filter) {
      throw new GenericError("Invalid filter", "The filter must be informed", 400);
    }

    const sapRequest = new SAPRequest({ filter, type, orderBy });
    const response = await this.getStockInformationUseCase.execute(sapRequest);

    return {
      statusCode: 200,
      response: response,
      message: `Success with SAP ${type}`
    }
  }
}
