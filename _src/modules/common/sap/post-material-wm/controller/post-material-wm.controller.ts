import { Controller } from '../../../../../presentation/protocols/controller'
import { HttpResponse } from '../../../../../presentation/protocols/http';
import { PostMaterialSAPWM } from '../models/post-material-sap-wm.model';
import { PostMaterialWMUseCase } from '../usecase/post-material-wm.usecase';

type MaterialProps = {
  materialNumber: string;
  plantCode: string;
  positionDestination: string;
  positionOrigin: string;
  quantity: number;
  storageLocationOrigin: string;
  storageLocationTypeOrigin: string;
  storageLocationDestination: string;
  storageLocationTypeDestination: string;
  UDDestination: string;
  UDOrigin: string;
  unityOfMeasurement: string;
  warehouseCode: string;
  warehouseNumber: string;
  language: string;
}

type Request = {
  materials: MaterialProps[]
}

export class PostMaterialWMController implements Controller {

  constructor(private usecase: PostMaterialWMUseCase) { }

  async handle(request: Request): Promise<HttpResponse> {

    const response = [] as any;

    for (let material of request.materials) {
      const materialResponse = await this.usecase.execute(new PostMaterialSAPWM(material));

      response.push(materialResponse);
    }

    return {
      response: response,
      statusCode: 200
    }
  }

}
