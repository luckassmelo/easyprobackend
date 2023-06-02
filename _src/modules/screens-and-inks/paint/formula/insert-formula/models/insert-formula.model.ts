import {Entity} from '../../../../../../domain/entity/entity'

type FormulaProps =  {
    description: string,
    sapNumber: number,
    vendorDesc: string,
    mediumDesc: string,
    usageType: number,
    color: number,
    inkWeight: number,
    mediumWeight: number,
    minViscosity: number,
    maxViscosity: number,
    minDensity: number,
    maxDensity: number,
    status: boolean,
    site: number
}


export class FormulaInfos extends Entity<FormulaProps> {

    constructor(props: FormulaProps, id?:string) {
        super(props, id);
    };

    get descriptionGetter(): string {
        return this.props.description;
    };

    get sapNumberGetter(): number {
        return this.props.sapNumber;
    };

    get vendorDescGetter(): string {
        return this.props.vendorDesc;
    };

    get mediumDescGetter(): string {
        return this.props.mediumDesc;
    };

    get usageTypeGetter(): number {
        return this.props.usageType;
    };

    get colorGetter(): number {
        return this.props.color;
    };

    get inkWeightGetter(): number {
        return this.props.inkWeight;
    };

    get mediumWeightGetter(): number {
        return this.props.mediumWeight;
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

    get siteGetter(): number {
        return this.props.site;
    };
}