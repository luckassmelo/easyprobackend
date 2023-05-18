import { SapPostError } from '../../../../../infra/SAP/errors/sap-post.error';
import { PostMaterialSAPIM } from '../models/post-material-sap-im.model';
import { ResponseMaterialIM } from '../../../../../infra/SAP/models/response-material.model';

export interface IPostMaterialIMRepository {
  postMaterialIM(material: PostMaterialSAPIM): Promise<ResponseMaterialIM | SapPostError>;
}
