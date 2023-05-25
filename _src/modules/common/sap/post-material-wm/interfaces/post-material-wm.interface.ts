import { SapPostError } from '../../../../../infra/SAP/errors/sap-post.error';
import { ResponseMaterialWM } from '../../../../../infra/SAP/models/response-material.model';
import { PostMaterialSAPWM } from '../models/post-material-sap-wm.model';

export interface IPostMaterialWMRepository {
  postMaterialWM(material: PostMaterialSAPWM): Promise<ResponseMaterialWM | SapPostError>;
}
