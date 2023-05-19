import * as rfc from 'node-rfc';
import { PostMaterialSAPWM } from '../../../modules/common/sap/post-material-wm/models/post-material-sap-wm.model';
import { PostMaterialSAPIM } from '../../../modules/common/sap/post-material-im/models/post-material-sap-im.model';
import { ResponseMaterialIM, ResponseMaterialWM } from '../models/response-material.model';
import { GenericError } from '../../../infra/api/errors/generic.error';
import { getNowDateToPostMaterial } from '../helpers/getNowDateToPostMaterial/getNowDateToPostMaterial';
import { SapPostError } from '../errors/sap-post.error';

type ReturnProp = {
  MESSAGE: string;
}

type OutputIM = {
  RETURN: ReturnProp[];
  MATERIALDOCUMENT: string;
  MATDOCUMENTYEAR: string;
  GOODSMVT_ITEM: string;
  ENTRY_QNT: string;
  STGE_LOC: string;
  BATCH: string;
}

type OutputWM = {
  E_TANUM: string;
  I_MATNR: string;
}

export class RfcAdapter {
  private client: rfc.Client;
  private settings: Record<string, string>;

  constructor(options: rfc.RfcConnectionParameters) {
    this.settings = options;
  }

  async connect(language: string): Promise<true> {
    return new Promise((resolve, reject) => {
      this.settings.lang = language;
      this.client = new rfc.Client(this.settings);
      this.client.connect((err) => {
        if (err) {
          throw new GenericError('SapConnection', 'Error on connect to SAP', 500, err);
        } else {
          resolve(true);
        }
      });
    });
  }

  async close(): Promise<void> {
    await this.client.close();
  }

  private async invoke(name: string, input: any) {
    return new Promise((resolve, reject) => {
      this.client.invoke(name, input, (err, output) => {
        if (err) {
          reject(err);
        } else {
          resolve(output);
        }
      });
    });
  }

  async postMaterialWM(material: PostMaterialSAPWM): Promise<ResponseMaterialWM | SapPostError> {
    try {
      const input = {
        'I_LGNUM': material.props.warehouseNumber,
        'I_BWLVS': '999',
        'I_MATNR': material.props.materialNumber.padStart(18, '0'),
        'I_WERKS': material.props.plantCode,
        'I_LGORT': material.props.warehouseCode,
        'I_ANFME': material.props.quantity,
        'I_ALTME': material.props.unitOfMeasure,
        'I_VLTYP': material.props.storageLocationOrigin,
        'I_VLBER': material.props.storageLocationTypeOrigin,
        'I_VLPLA': material.props.positionOrigin,
        'I_VLENR': material.props.UDOrigin.padStart(20, '0'),
        'I_NLTYP': material.props.storageLocationDestination,
        'I_NLBER': material.props.storageLocationTypeDestination,
        'I_NLPLA': material.props.positionDestination,
        'I_NLENR': material.props.UDDestination,
        'I_COMMIT_WORK': 'X',
      };

      const output: OutputWM = await this.invoke('L_TO_CREATE_SINGLE', input) as OutputWM;

      if (output.E_TANUM !== '') {
        return {
          document: `${output.E_TANUM.trim()}`,
          materialNumber: output.I_MATNR,
          year: new Date().getFullYear().toString()
        }
      }
      else {
        throw new SapPostError('SapPostWM', 'Error during the posting material WM.', 404);
      }
    }
    catch (err: any) {
      return new GenericError('SapPostWM', 'Error during the posting material WM.', 404, err);
    }
  }

  async postMaterialIM(material: PostMaterialSAPIM): Promise<ResponseMaterialIM | SapPostError> {

    const input = {
      'MATERIAL': material.props.materialNumber.padStart(18, '0'),
      'PLANT': material.props.plantCode,
      'STGE_LOC': material.props.locationCode,
      'ENTRY_QNT': material.props.quantity,
      'ENTRY_UOM': material.props.unityOfMeasurement,
      'MOVE_TYPE': material.props.movementType,
      'COSTCENTER': material.props.costCenter,
      'BATCH': material.props.batch,
      'ORDERID': material.props.internalOrder
    };

    const now = getNowDateToPostMaterial();

    const output: OutputIM = await this.invoke('BAPI_GOODSMVT_CREATE', {
      GOODSMVT_HEADER: {
        PSTNG_DATE: now,
        DOC_DATE: now,
        REF_DOC_NO: material.props.referenceDocument,
        HEADER_TXT: material.props.headerDescription,
      },
      GOODSMVT_ITEM: [input],
      GOODSMVT_CODE: {
        GM_CODE: '03',
      }
    }) as OutputIM;

    if (output.RETURN.length === 0) {
      await this.invoke('BAPI_TRANSACTION_COMMIT', {});

      return {
        document: `${output.MATERIALDOCUMENT.trim()}`,
        year: `${output.MATDOCUMENTYEAR.trim()}`,
        materialNumber: material.props.materialNumber,
      }

    } else {
      await this.invoke('BAPI_TRANSACTION_ROLLBACK', {});

      return new SapPostError(output['RETURN'][0].MESSAGE, '', {
        data: input,
      });
    }
  }

  getInstance(): rfc.Client {
    return this.client;
  }

}
