import {Entity} from '../../../../../../domain/entity/entity'


export class FormulaInfos {

    private _description: string;
    private _sapNumber: number;
    private _vendorDesc: string;
    private _mediumDesc: string;
    private _usageType: number;
    private _color: number;
    private _inkWeight: number;
    private _mediumWeight: number;
    private _minViscosity: number;
    private _maxViscosity: number;
    private _minDensity: number;
    private _maxDensity: number;
    private _status: boolean;
    private _site: number;

    public get description(): string {
        return this._description;
      }
    
    public set description(value: string) {
        this._description = value;
    }
    
      public get sapNumber(): number {
        return this._sapNumber;
      }
    
      public set sapNumber(value: number) {
        this._sapNumber = value;
      }
    
      public get vendorDesc(): string {
        return this._vendorDesc;
      }
    
      public set vendorDesc(value: string) {
        this._vendorDesc = value;
      }
    
      public get mediumDesc(): string {
        return this._mediumDesc;
      }
    
      public set mediumDesc(value: string) {
        this._mediumDesc = value;
      }
    
      public get usageType(): number {
        return this._usageType;
      }
    
      public set usageType(value: number) {
        this._usageType = value;
      }
    
      public get color(): number {
        return this._color;
      }
    
      public set color(value: number) {
        this._color = value;
      }
    
      public get inkWeight(): number {
        return this._inkWeight;
      }
    
      public set inkWeight(value: number) {
        this._inkWeight = value;
      }
    
      public get mediumWeight(): number {
        return this._mediumWeight;
      }
    
      public set mediumWeight(value: number) {
        this._mediumWeight = value;
      }
    
      public get minViscosity(): number {
        return this._minViscosity;
      }
    
      public set minViscosity(value: number) {
        this._minViscosity = value;
      }
    
      public get maxViscosity(): number {
        return this._maxViscosity;
      }
    
      public set maxViscosity(value: number) {
        this._maxViscosity = value;
      }
    
      public get minDensity(): number {
        return this._minDensity;
      }
    
      public set minDensity(value: number) {
        this._minDensity = value;
      }
    
      public get maxDensity(): number {
        return this._maxDensity;
      }
    
      public set maxDensity(value: number) {
        this._maxDensity = value;
      }
    
      public get status(): boolean {
        return this._status;
      }
    
      public set status(value: boolean) {
        this._status = value;
      }
    
      public get site(): number {
        return this._site;
      }
    
      public set site(value: number) {
        this._site = value;
      }
}