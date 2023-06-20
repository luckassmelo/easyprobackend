import { GetInksColorsModel } from "../models/get-inks-colors.model";
import { IGetInksColorsRepository } from "../interface/get-inks-colors.interface";
export class GetInksColorsUseCase {
  constructor(private getInksColorsRepository: IGetInksColorsRepository) {}

  async execute(props: GetInksColorsModel) {
    return await this.getInksColorsRepository.getInksColors(props);
  }
}
