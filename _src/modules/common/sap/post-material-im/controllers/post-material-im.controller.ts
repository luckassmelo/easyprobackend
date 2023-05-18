import { SapPostError } from '../../../../../infra/SAP/errors/sap-post.error';
import { GenericError } from '../../../../../infra/api/errors/generic.error';
import { Controller } from '../../../../../presentation/protocols/controller';
import { HttpResponse } from '../../../../../presentation/protocols/http';
import { PostMaterialSAPIM } from '../models/post-material-sap-im.model';
import { ResponseMaterialIM } from '../../../../../infra/SAP/models/response-material.model';
import { PostMaterialIMUseCase } from '../usecases/post-material-im.usecase';

type MaterialProps = {
  materialNumber: string,
  plantCode: string,
  locationCode: string,
  quantity: number,
  unityOfMeasurement: string,
  movementType: string,
  costCenter: string,
  internalOrder: string,
  batch: string,
  bin: string,
  headerDescription: string,
  referenceDocument: string,
  language: string
}

type Request = {
  materials: MaterialProps[]
}

export class PostMaterialIMController implements Controller {

  constructor(private usecase: PostMaterialIMUseCase) { }

  async handle(request: Request): Promise<HttpResponse> {

    const response = [];

    for (let material of request.materials) {
      const materialResponse = await this.usecase.execute(new PostMaterialSAPIM(material));

      response.push(materialResponse);
    }

    return {
      statusCode: 200,
      response: response
    }
  }

}
