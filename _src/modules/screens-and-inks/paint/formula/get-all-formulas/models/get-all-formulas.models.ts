import { ParameterNotFoundError } from "../../../../../../infra/api/errors/parameter-not-found.error";
import { ParameterWrongTypeError } from "../../../../../../infra/api/errors/parameter-wrong-type.error";

export class GetAllFormulasModal {
    private _idSite: number;

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
}