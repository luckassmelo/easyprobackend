import { ParameterResponse } from '../entity/parameter-response.entity';
import { Parameter } from '../entity/parameter.entity';
import { IGetEasyPROParameterRepository } from '../interfaces/get-easypro-parameter-repository.interface';
import { ParameterResponseDTO } from '../types/param.types';
import { HttpAdapter } from '../adapters/http.adapter';

export class GetEasyPROParameterUseCase {
  constructor(private repository: IGetEasyPROParameterRepository) { }

  async execute(parameter: Parameter): Promise<ParameterResponseDTO> {
    const response = await this.repository.getParameter(parameter.props.idSite, parameter.props.name);
    let paramResponse = {} as ParameterResponseDTO;
    paramResponse.value = null;
    paramResponse.url = null;

    if (response.length === 0) return paramResponse;


    const parameterResponse = ParameterResponse.create(response[0]);
    paramResponse.url = parameterResponse.getResource(parameter.props.filter);

    if (response[0].descResource === "Variables" ||
      response[0].descResource === "SAP") {
      paramResponse.value = parameterResponse.props.paramValue;
    }
    else if (response[0].descResource === "MDC" ||
      response[0].descResource === "Api Rest" ||
      response[0].descResource === "Maintenance" ||
      response[0].descResource === "BD Local" ||
      response[0].descResource === "Cronetwork"
    ) {
      paramResponse.value = await HttpAdapter.request("GET", paramResponse.url);
    }



    return paramResponse;
  }
}
