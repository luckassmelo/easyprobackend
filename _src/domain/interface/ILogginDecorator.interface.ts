export interface ILogginDecorator{
     saveLog(infoLog: JSON, processName:string): void;
}