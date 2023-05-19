import { SAPRequest } from '../models/sap-request.entity';
import { GetStockInformationUseCase } from '../usecases/get-stock-information.usecase';
import { GetStockInformationRepository } from '../repository/get-stock-information.repository';
import { httpSapAdapter } from '../adapters/http-sap.adapter';

describe('SAP get stock information (need a proxifier configured to work)', () => {
  const TIMEOUT_IN_MILLISECONDS = 30000;

  test('Should be return a material from IM stock (In network)', async () => {
    const getStockInformationRepository = new GetStockInformationRepository(httpSapAdapter);

    const sapRequest = new SAPRequest({
      orderBy: 'Total_Stock_Unrestricted desc',
      type: 'IM',
      filter: `Plant eq '3600' and Material_Number eq '6314370' and (Quantity_Unrestr ge 1 or Total_Stock_Unrestricted ge 1 )`
    });

    const usecase = new GetStockInformationUseCase(getStockInformationRepository);
    const result = await usecase.execute(sapRequest);

    expect(result[0]['Material_Number']).toEqual("6314370");

  }, TIMEOUT_IN_MILLISECONDS);


  test('Should be return a material from WM stock (In network)', async () => {
    const getStockInformationRepository = new GetStockInformationRepository(httpSapAdapter);

    const sapRequest = new SAPRequest({
      type: 'WM',
      filter: `Storage_Bin ne 'TR-ZONE' and Plant eq '3600' and Storage_Type eq '001' and Material_Number eq '1223743' and Stock_Category eq '' `
    });

    const usecase = new GetStockInformationUseCase(getStockInformationRepository);
    const result = await usecase.execute(sapRequest);

    expect(result[0]['Material_Number']).toEqual("1223743");

  }, TIMEOUT_IN_MILLISECONDS);

  test('Should be return a token', async () => {

    const getStockInformationRepository = new GetStockInformationRepository(httpSapAdapter);
    const token = await getStockInformationRepository.getToken();

    expect(token).not.toBeNull();

  }, TIMEOUT_IN_MILLISECONDS);
});
