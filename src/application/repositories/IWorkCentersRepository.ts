export interface IWorkCentersRepository {
    allWorkCenters(): Promise<Object | null>;
}