import { PostMaterialSAPIM } from '../models/post-material-sap-im.model';
import { sapConnectionConfigurationRfc } from '../../../../../config/config';
import { RfcAdapter } from '../../../../../infra/SAP/adapters/rfc.adapter';

describe('SAP post materials (need a proxifier configured to work)', () => {
  const TIMEOUT_IN_MILLISECONDS = 40000;
  const rfcConnection = new RfcAdapter({ ...sapConnectionConfigurationRfc });

  beforeAll(async () => {
    await rfcConnection.connect('PT');
  }, TIMEOUT_IN_MILLISECONDS);


  afterAll(async () => {
    await rfcConnection.close();
  }, TIMEOUT_IN_MILLISECONDS);

  test('should be returning a true to be connected with SAP', async () => {
    expect(await rfcConnection.connect('PT')).toBeTruthy();
  }, TIMEOUT_IN_MILLISECONDS);

  test('should post material in SAP (IM)', async () => {
    const postMaterialIM = new PostMaterialSAPIM({
      materialNumber: '6313662',
      plantCode: '3600',
      locationCode: '0603',
      quantity: 1,
      unityOfMeasurement: 'ST',
      movementType: '201',
      costCenter: 'C122222805',
      internalOrder: '',
      batch: '',
      bin: 'FA07',
      headerDescription: '',
      referenceDocument: '',
      language: 'PT'
    });

    const responseIM = await rfcConnection.postMaterialIM(postMaterialIM);

    expect(responseIM['document']).not.toEqual('');

  }, TIMEOUT_IN_MILLISECONDS);
});
