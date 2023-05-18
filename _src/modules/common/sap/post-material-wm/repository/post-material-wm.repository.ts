import { sapConnectionConfigurationRfc } from '../../../../../config/config';
import { RfcAdapter } from '../../../../../infra/SAP/adapters/rfc.adapter';
import { SapPostError } from '../../../../../infra/SAP/errors/sap-post.error';
import { ResponseMaterialWM } from '../../../../../infra/SAP/models/response-material.model';
import { PostMaterialSAPWM } from '../models/post-material-sap-wm.model';
import { IPostMaterialWMRepository } from '../interfaces/post-material-wm.interface';


export class PostMaterialWMRepository implements IPostMaterialWMRepository {

  private rfcConnection: RfcAdapter;

  async postMaterialWM(material: PostMaterialSAPWM): Promise<SapPostError | ResponseMaterialWM> {
    sapConnectionConfigurationRfc.lang = material.props.language;
    this.rfcConnection = new RfcAdapter({ ...sapConnectionConfigurationRfc });
    await this.rfcConnection.connect(material.props.language);
    const response = await this.rfcConnection.postMaterialWM(material);
    await this.rfcConnection.close();

    return response;
  }

}
