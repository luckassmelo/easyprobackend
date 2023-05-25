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
              statusCode: res?.statusCode ?? 500,
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
   