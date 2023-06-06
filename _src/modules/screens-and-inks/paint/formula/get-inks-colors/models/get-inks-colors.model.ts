import { ParameterNotFoundError } from "../../../../../../infra/api/errors/parameter-not-found.error";
import { ParameterWrongTypeError } from "../../../../../../infra/api/errors/parameter-wrong-type.error";


export class GetInksColorsModel {
    private _id: number;
    private _description: string;
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

    public get id(): number {
        return this._id;
    }

    public get idSite(): number {
        return this._idSite;
    }

    public get description(): string {
        return this._description;
    }
}