import { Entity } from "../../../../../../domain/entity/entity";

type UpdateProps = {
    weightInk: number;
    weightMedium: number;
    maxViscosity: number;
    minViscosity: number;
    maxDensity: number;
    minDensity: number;
    status: boolean;
}
export class UpdateFormula extends Entity<UpdateProps>{
    constructor(props: UpdateProps, id:number){
        super(props, id);
    };


    get inkWeightGetter(): number {
        return this.props.weightInk;
    };

    get mediumWeightGetter(): number {
        return this.props.weightMedium;
    };

    get minViscosityGetter(): number {
        return this.props.minViscosity;
    };

    get maxViscosityGetter(): number {
        return this.props.maxViscosity;
    };

    get minDensityGetter(): number {
        return this.props.minDensity;
    };

    get maxDensityGetter(): number {
        return this.props.maxDensity;
    };

    get statusGetter(): boolean {
        return this.props.status;
    };
}