import { GetError } from "../../get-error/models/get-error.model";
import { ResponseError } from "./response-error.interface";

export interface IGetErrorRepository {
    findError( idRequisition: GetError): Promise<ResponseError>;
}