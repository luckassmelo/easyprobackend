import { sapConnectionConfigurationRfc } from '../../../../../config/config';
import { RfcAdapter } from '../../../../../infra/SAP/adapters/rfc.adapter';
import { IPostMaterialIMRepository } from '../interfaces/post-material-im-repository.interface';
import { PostMaterialSAPIM } from '../models/post-material-sap-im.model';
import { ResponseMaterialIM } from '../../../../../infra/SAP/models/response-material.model';
import { SapPostError } from '../../../../../infra/SAP/errors/sap-post.error';

export class PostMaterialIMRepository implements IPostMaterialIMRepository {

  private rfcConnection: RfcAdapter;

  async postMaterialIM(material: PostMaterialSAPIM): Promise<ResponseMaterialIM | SapPostError> {
    sapConnectionConfigurationRfc.lang = material.props.language;
    this.rfcConnection = new RfcAdapter({ ...sapConnectionConfigurationRfc });
    await this.rfcConnection.connect(material.props.language);
    const response = await this.rfcConnection.postMaterialIM(material);
    await this.rfcConnection.close();

    return response;
  }
}
