import { GetEasyPROParameterUseCase } from '../usecases/get-easypro-parameter.usecase';
import { Parameter } from '../entity/parameter.entity'
import { ParameterDTO } from '../types/param.types';
import { Controller } from '../../../../presentation/protocols/controller';
import { HttpResponse } from '../../../../presentation/protocols/http';

export class GetEasyPROParameterController implements Controller {

  constructor(private readonly usecase: GetEasyPROParameterUseCase) { }

  async handle(props: ParameterDTO): Promise<HttpResponse> {

    const parameter = new Parameter({
      filter: props.filter,
      idSite: props.idSite,
      name: props.name,
    });

    const response = await this.usecase.execute(parameter);

    return {
      statusCode: 200,
      response: response,
      message: `Success with parameter ${props.name}`
    }
  }
}
