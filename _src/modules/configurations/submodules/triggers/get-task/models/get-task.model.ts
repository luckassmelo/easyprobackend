import { ParameterNotFoundError } from '../../../../../../infra/api/errors/parameter-not-found.error';
import { ParameterWrongTypeError } from '../../../../../../infra/api/errors/parameter-wrong-type.error';

export class GetTriggerTask {
    private _createDate: Date;
    private _idTrigger: number;
    private _idTask: number;
    private _nameTask: string;
    private _idUser: number;
    private _statusClosed: boolean;
    private _closedAt: Date;
    private _description: string;
    private _idOee: number;
    private _idSite: number;


    public set idTrigger(id: number){

        if(!Number.isInteger(id)){
            throw new ParameterWrongTypeError('idTrigger', 'integer');
        };

        this._idTrigger = id
    };


    
    public get createTaskDate() : Date {
        return this._createDate;
    };

    public get idTrigger() : number {
        return this._idTrigger;
    };

    public get idTask() : number {
        return this._idTask;
    };

    public get nameTask(): string {
        return this._nameTask;
    };

    public get idUser(): number {
        return this._idUser;
    };

    public get statusClosed(): boolean {
        return this._statusClosed;
    };

    public get closedAt(): Date {
        return this._closedAt;
    };

    public get description(): string {
        return this._description;
    };

    public get idOee(): number {
        return this._idOee;
    };

    public get idSite(): number {
        return this._idSite;
    };
}