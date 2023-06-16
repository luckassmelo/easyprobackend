import { ParameterNotFoundError } from "../../../../../../infra/api/errors/parameter-not-found.error";
import { ParameterWrongTypeError } from "../../../../../../infra/api/errors/parameter-wrong-type.error";

export class GetAllFormulasModal {
    private _idSite: number;
    private _idFormula: number;

    public set idSite(idSite: number) {
        if (typeof idSite !== 'number') {
            throw new ParameterWrongTypeError('idSite', 'number');
        }
        if(!idSite) {
            throw new ParameterNotFoundError('idSite')
        }

        this._idSite = idSite;
    }

    public get idSite(): number {
        return this._idSite;
    }

    public set idFormula(idFormula: number ) {
        if (typeof idFormula !== 'number') {
            throw new ParameterWrongTypeError('idFormula', 'number');
        }
        
        idFormula ? this._idFormula = idFormula : this._idFormula = 0
    }

    public get idFormula(): number {
        return this._idFormula
    }
}