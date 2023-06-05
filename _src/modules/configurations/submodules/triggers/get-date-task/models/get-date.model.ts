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


    public set idTriggerSet(id: number){
        if (typeof id !== 'number'){
            throw new ParameterWrongTypeError('idTrigger', 'number');
        };

        if(!id){
            throw new ParameterNotFoundError('idTrigger');
        };

        this._idTrigger = id
    }


    
    public get createTaskDate() : Date {
        return this._createDate;
    };

    public get idTrigger() : number {
        return this._idTrigger;
    };

    public get idTask() : number {
        return this._idTask;
    }

}