import { ParameterNotFoundError } from "../../../../../../infra/api/errors/parameter-not-found.error";
import { ParameterWrongTypeError } from "../../../../../../infra/api/errors/parameter-wrong-type.error";

export class UpdateFormula {
    private _idFormula: number ;
    private _weightInk: number | undefined;
    private _weightMedium: number | undefined;
    private _maxViscosity: number | undefined;
    private _minViscosity: number | undefined;
    private _maxDensity: number | undefined;
    private _minDensity: number | undefined;
    private _status: boolean | undefined;

public set idFormula(id: number) {
    if(!Number.isInteger(id)) throw new ParameterWrongTypeError('idFormula', 'integer'); 

    this._idFormula = id;
};

public set inkWeight(inkWeight: number | undefined) {
    if(typeof inkWeight !== 'number' && typeof inkWeight !== 'undefined'){
        throw new ParameterWrongTypeError('inkWeight', 'number')
    };
         this._weightInk = inkWeight;
};

public set mediumWeight(mediumWeight: number | undefined) {
    if(typeof mediumWeight !== 'number' && typeof mediumWeight !== 'undefined'){
        throw new ParameterWrongTypeError('mediumWeight', 'number')
    };
         this._weightMedium = mediumWeight;
};

public set minViscosity(minViscosity: number | undefined) {
    if(typeof minViscosity !== 'number' && typeof minViscosity !== 'undefined'){
        throw new ParameterWrongTypeError('minViscosity', 'number')
    };
         this._minViscosity = minViscosity;
};

public set maxViscosity(maxViscosity: number | undefined) {
    if(typeof maxViscosity !== 'number' && typeof maxViscosity !== 'undefined'){
        throw new ParameterWrongTypeError('maxViscosity', 'number')
    };
         this._maxViscosity = maxViscosity;
};

public set minDensity(minDensity: number | undefined) {
    if(typeof minDensity !== 'number' && typeof minDensity !== 'undefined'){
        throw new ParameterWrongTypeError('minDensity', 'number')
    };
         this._minDensity = minDensity;
};

public set maxDensity(maxDensity: number | undefined) {
    if(typeof maxDensity !== 'number' && typeof maxDensity !== 'undefined'){
        throw new ParameterWrongTypeError('maxDensity', 'number')
    };
         this._maxDensity = maxDensity;
};

public set status(status: boolean | undefined) {
    if(typeof status !== 'boolean' && typeof status !== 'undefined'){
        throw new ParameterWrongTypeError('status', 'boolean')
    };

        this._status = status;
};


public get idFormula(): number {
    return this._idFormula;
}

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