import { ParameterNotFoundError } from '../../../../../infra/api/errors/parameter-not-found.error';
import { ParameterWrongTypeError } from '../../../../../infra/api/errors/parameter-wrong-type.error';


export class LogModel {
  private _processName: string;
  private _infoLog: any;

  public set processName(processName: string) {

    if (typeof processName !== 'string') {
      throw new ParameterWrongTypeError('processName', 'string');

    }
    if (!processName) {
      throw new ParameterNotFoundError('processName');
    }

    this._processName = processName;
  }

  public set infoLog(infoLog: any) {
    if (!infoLog || (Object.keys(infoLog).length === 0 && typeof infoLog === 'object')) {
      throw new ParameterNotFoundError('infoLog');
    }
    if (typeof infoLog !== 'object') {
      throw new ParameterWrongTypeError('infoLog', 'object');
    }

    this._infoLog = infoLog;
  }

  public get processName(): string {
    return this._processName;
  }

  public get infoLog(): any {
    return this._infoLog;
  }
}
