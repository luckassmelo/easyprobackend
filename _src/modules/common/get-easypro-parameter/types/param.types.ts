export type ParameterDTO = {
  idSite: number;
  name: string;
  filter: string;
}

export type ParameterResponseProps = {
  idParamName: string;
  paramValue: string;
  paramValueAux: string;
  paramValueDefault: string;
  idSite: string;
  serverResource: string;
  descResource: string;
}

export type ParameterResponseDTO = {
  url: string;
  value: any
}
