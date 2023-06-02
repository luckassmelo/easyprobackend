import { GetInksColorsModel } from "../models/get-inks-colors.model";
import { IGetInksColorsRepository } from "../interface/get-inks-colors.interface";
import { GetInksColorsProp } from "../models/get-inks-colors.model";
export class GetInksColorsUseCase {
  constructor(private getInksColorsRepository: IGetInksColorsRepository) {}

  async execute(props: GetInksColorsProp) {
    const getInksColors = new GetInksColorsModel({
      ...props,
    });

    return await this.getInksColorsRepository.getInksColors(getInksColors);
  }
}
