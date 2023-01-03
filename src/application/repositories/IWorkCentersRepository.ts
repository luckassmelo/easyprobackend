export interface IWorkCentersRepository {
    allWorkCenters(site: number): Promise<Array<Object> | null>;
}