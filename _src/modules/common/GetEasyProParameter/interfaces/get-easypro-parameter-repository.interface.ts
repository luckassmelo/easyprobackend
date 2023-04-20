import { ParameterResponseProps } from '../types/param.types';

export interface IGetEasyPROParameterRepository {
  getParameter(idSite: number, name: string): Promise<ParameterResponseProps[]>;
}
