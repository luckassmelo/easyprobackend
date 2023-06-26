import { ParameterNotFoundError } from "../../../../../../infra/api/errors/parameter-not-found.error";
import { ParameterWrongTypeError } from "../../../../../../infra/api/errors/parameter-wrong-type.error";

export class UpdateFormula {
    private _idFormula: number ;
    private _weightInk: number | null;
    private _weightMedium: number | null;
    private _maxViscosity: number | null;
    private _minViscosity: number | null;
    private _maxDensity: number | null;
    private _minDensity: number | null;
    private _status: boolean | null;
    private _remark: string | null;
    private _idUser: number;

public set idFormula(id: number) {
    if(!Number.isInteger(id)) throw new ParameterWrongTypeError('idFormula', 'integer'); 

    this._idFormula = id;
};

public set idUser(idUser: number){
    if(!idUser) throw new ParameterNotFoundError('idUser');
    this._idUser = idUser
};

public set remark(remark: string) {
    if(typeof remark !== 'string' && remark !== null){
        throw new ParameterWrongTypeError('remark', 'string');
    };

    this._remark = remark
};

public set inkWeight(inkWeight: number) {
    if(typeof inkWeight !== 'number' && typeof inkWeight !== 'undefined'){
        throw new ParameterWrongTypeError('inkWeight', 'number')
    };
         this._weightInk = inkWeight;
};

public set mediumWeight(mediumWeight: number | null) {
    if(typeof mediumWeight !== 'number' && typeof mediumWeight !== 'undefined'){
        throw new ParameterWrongTypeError('mediumWeight', 'number')
    };
         this._weightMedium = mediumWeight;
};

public set minViscosity(minViscosity: number | null) {
    if(typeof minViscosity !== 'number' && typeof minViscosity !== 'undefined'){
        throw new ParameterWrongTypeError('minViscosity', 'number')
    };
         this._minViscosity = minViscosity;
};

public set maxViscosity(maxViscosity: number | null) {
    if(typeof maxViscosity !== 'number' && typeof maxViscosity !== 'undefined'){
        throw new ParameterWrongTypeError('maxViscosity', 'number')
    };
         this._maxViscosity = maxViscosity;
};

public set minDensity(minDensity: number | null) {
    if(typeof minDensity !== 'number' && typeof minDensity !== 'undefined'){
        throw new ParameterWrongTypeError('minDensity', 'number')
    };
         this._minDensity = minDensity;
};

public set maxDensity(maxDensity: number | null) {
    if(typeof maxDensity !== 'number' && typeof maxDensity !== 'undefined'){
        throw new ParameterWrongTypeError('maxDensity', 'number')
    };
         this._maxDensity = maxDensity;
};

public set status(status: boolean | null) {
    if(typeof status !== 'boolean' && typeof status !== 'undefined'){
        throw new ParameterWrongTypeError('status', 'boolean')
    };

        this._status = status;
};

public get remark(): string {
    return this._remark;
};

public get idUser(): number{
    return this._idUser
}

public get idFormula(): number {
    return this._idFormula;
};

public get inkWeight(): number {
        return this._weightInk;
    };

public get mediumWeight(): number {
        return this._weightMedium;
    };

public get minViscosity(): number {
        return this._minViscosity;
    };

public get maxViscosity(): number {
        return this._maxViscosity;
    };

public get minDensity(): number {
        return this._minDensity;
    };

public get maxDensity(): number {
        return this._maxDensity;
    };

public get status(): boolean {
        return this._status;
    };
}