import { SapPostError } from '../../../../../infra/SAP/errors/sap-post.error';
import { IPostMaterialIMRepository } from '../interfaces/post-material-im-repository.interface';
import { PostMaterialSAPIM } from '../models/post-material-sap-im.model';
import { ResponseMaterialIM } from '../../../../../infra/SAP/models/response-material.model';

export class PostMaterialIMUseCase {

  constructor(private repository: IPostMaterialIMRepository) { }

  async execute(sapIM: PostMaterialSAPIM): Promise<ResponseMaterialIM | SapPostError> {

    const response = await this.repository.postMaterialIM(sapIM);

    return response;
  }
}
