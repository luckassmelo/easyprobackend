import { IGetInksColorsRepository } from "../../interface/get-inks-colors.interface";
import { GetInksColorsModel } from "../../models/get-inks-colors.model";

export class InMemoryGetInksColorsRepository implements IGetInksColorsRepository {
  private inksColors: any[] = [];

  async getInksColors(getInksColorsProps: GetInksColorsModel): Promise<any> {
    const filteredColors = this.inksColors.filter(
      (color) => color.site === getInksColorsProps.props.idSite
    );
    return filteredColors;
  }
}
