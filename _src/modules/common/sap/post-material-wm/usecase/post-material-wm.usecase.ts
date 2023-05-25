import { SapPostError } from '../../../../../infra/SAP/errors/sap-post.error';
import { ResponseMaterialWM } from '../../../../../infra/SAP/models/response-material.model';
import { PostMaterialSAPWM } from '../models/post-material-sap-wm.model';
import { IPostMaterialWMRepository } from '../interfaces/post-material-wm.interface';


export class PostMaterialWMUseCase {
  constructor(private repository: IPostMaterialWMRepository) { }

  async execute(material: PostMaterialSAPWM): Promise<ResponseMaterialWM | SapPostError> {
    const response = await this.repository.postMaterialWM(material);
    return response;

  }
}
