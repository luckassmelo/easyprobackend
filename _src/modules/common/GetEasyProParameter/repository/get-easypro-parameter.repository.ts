import { IGetEasyPROParameterRepository } from '../interfaces/get-easypro-parameter-repository.interface';
import PostgresSQLAdapter from "../../../../../src/infra/database/PostgreSQLAdapter";
import { ParameterResponseProps } from '../types/param.types';

export class GetEasyPROParameterRepository implements IGetEasyPROParameterRepository {

  constructor(
    private readonly adapter: PostgresSQLAdapter
  ) { }

  async getParameter(idSite: number, name: string): Promise<ParameterResponseProps[]> {
    const response = await this.adapter
      .connection
      .select<ParameterResponseProps[]>("id_param_name as idParamName",
        "param_value as paramValue",
        "param_value_aux as paramValueAux",
        "param_value_default as paramValueDefault",
        "id_site as idSite",
        "server_resource as serverResource",
        "desc_resource as descResource")
      .from("param.tbl_param")
      .where("id_param_name", "=", name)
      .where("id_site", "=", idSite)
      .innerJoin("param.tbl_param_value", "tbl_param.id_param", "tbl_param_value.id_param")
      .innerJoin("param.tbl_resource_info", "tbl_param.id_resource", "param.tbl_resource_info.id_resource")
      .innerJoin("param.tbl_param_type", "tbl_param.id_param_type", "tbl_param_type.id_param_type")
      .innerJoin("param.tbl_resources", "tbl_param.id_resource", "tbl_resources.id_resource");

    return response;
  }

}
