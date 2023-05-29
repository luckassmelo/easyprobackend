import { PostMaterialSAPWM } from '../models/post-material-sap-wm.model';
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

  test('should post material in SAP (WM)', async () => {
    const postMaterialWM = new PostMaterialSAPWM({
      materialNumber: '6313662',
      plantCode: '3600',
      binDestination: '',
      binOrigin: '',
      quantity: 1,
      storageSectionOrigin: '002',
      storageTypeOrigin: '001',
      storageSectionDestination: '002',
      storageTypeDestination: '001',
      UDDestination: '4503599392000001',
      UDOrigin: '4503565559000002',
      unityOfMeasurement: 'ST',
      warehouseCode: '0603',
      warehouseNumber: '603',
      language: 'PT'
    });

    const responseWM = await rfcConnection.postMaterialWM(postMaterialWM);
    expect(responseWM['document']).not.toEqual('');

  }, TIMEOUT_IN_MILLISECONDS);
});
