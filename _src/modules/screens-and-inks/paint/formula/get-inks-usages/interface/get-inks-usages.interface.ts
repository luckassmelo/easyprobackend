import { GetInksUsagesModel } from "../models/get-inks-usages.model";

export interface IGetInksUsagesRepository {
    getInksUsages(getInksUsagesProps: GetInksUsagesModel): Promise<GetInksUsagesModel[]>; 
}
