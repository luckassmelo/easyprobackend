import { GetEasyPROParameterUseCase } from '../usecases/get-easypro-parameter.usecase';
import { Parameter } from '../entity/parameter.entity'
import { ParameterDTO } from '../types/param.types';

export class GetEasyPROParameterController {

  constructor(private readonly usecase: GetEasyPROParameterUseCase) { }

  async handle(props: ParameterDTO) {

    const parameter = new Parameter({
      filter: props.filter,
      idSite: props.idSite,
      name: props.name,
    });

    return await this.usecase.execute(parameter);
  }
}
