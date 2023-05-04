import { Request, Response, NextFunction} from "express";
import {ILogginDecorator} from '../interface/ILogginDecorator.interface'

type logProps = {
    info: object
    process: string;
  };



  export function GenericLog(props: logProps, logservice: ILogginDecorator) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: TypedPropertyDescriptor<any>
    ) {
      const originalMethod = descriptor.value ;
  
      const newDescriptor: TypedPropertyDescriptor<any> = {
        ...descriptor,
        value: async function (...args: any[]) {
          const result = await originalMethod.apply(this, args);
          
          const req = args.find(arg => arg?.constructor?.name === 'IncomingMessage');
          const res = args.find(arg => arg?.constructor?.name === 'ServerResponse');
          
          const logData = {
            statusCode: res?.statusCode ?? 200,
            message: props.info,
          };
          const formatJSON = JSON.parse(JSON.stringify(logData))
          try {
            await logservice.saveLog(formatJSON, props.process);
          } catch (error) {
            const logData = {
              statusCode: res?.statusCode ?? 200,
              message: error,
            };
            const formatJSON = JSON.parse(JSON.stringify(logData))
            await logservice.saveLog(formatJSON, props.process);
          }
  
          return result;
        }
      };
      
      return newDescriptor;
    }
  }  
  // export function GenericLog(props: logProps, logservice: ILogginDecorator) {
  //   return function (
  //     target: any,
  //     propertyKey: string,
  //     descriptor: TypedPropertyDescriptor<any>
  //   ) {
  //     const originalMethod = descriptor.value ;
  //     console.log(originalMethod);

      
  //     const newDescriptor: TypedPropertyDescriptor<any> = {
  //       ...descriptor,
  //       async value(req: Request, res: Response, next: NextFunction, ...args: any[]){
  //           try {
  //               const result = originalMethod
  //               const logData = {
  //                   statusCode: req?.statusCode ?? 200,
  //                   message: props.info,
  //               }
  //               const jsonString = JSON.stringify(logData)
  //               const jsonFormat = JSON.parse(jsonString)    
  //               await logservice.saveLog(jsonFormat, props.process)
  //               return result
  //             } catch (error) {
  //               const statusCode = req.statusCode ?? 500;
  //               const message = error.response?.data?.message || error.message;
  //               const logData = {
  //                   statusCode: statusCode,
  //                   message: message,
  //               }
  //               const jsonString = JSON.stringify(logData)
  //               const jsonFormat = JSON.parse(jsonString)                
  //               await logservice.saveLog(jsonFormat, props.process)
  //               next(error);
  //             }
  //           }
  //         };
          
  //         return newDescriptor;
  //       }
  //     }
   