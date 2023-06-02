import { GetInksColorsModel } from "../models/get-inks-colors.model";

export interface IGetInksColorsRepository {
    getInksColors(getInksColorsProps: GetInksColorsModel): Promise<GetInksColorsModel>
}