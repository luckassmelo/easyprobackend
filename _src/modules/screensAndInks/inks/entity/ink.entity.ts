import { Entity } from "../../../../domain/Entity/entitiy"
export enum useType {
    GRA = 'GRA',
    VIB = 'VIB',
    ANI = 'ANI',
    OPC = 'OPC'
}
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      const result = originalMethod.apply(this, args);
      console.log(`Method ${propertyKey} called with args ${JSON.stringify(args)} and returned ${JSON.stringify(result)}`);
      return result;
    };
  
    return descriptor;
  }
  
type InkProps = {
    preparationDate: Date,
    batchNumberSchott: Number,
    initialCodeInk: String, 
    colorInk: String,
    finalCodeInk: String,
    validationDateInk: Date,
    typeToUse: useType,
    weigthInk: Number,
    batchNumberMedium: Number,
    fabricationDateMedium: Date,
    mediumCode: Number,
    weigthMedium: Number,
    fabricationDateInk: Date,
    batchNumberInk: Number,
    analysiDesinty?: Number,
    analysiViscosity?: Number,
    aditionalEnamel?: Number,
    aditionalMedium?: Number
}

export class inkEntity extends Entity<InkProps> {

    constructor(props: InkProps){
        super(props);
    }

    @log
    static create(props: InkProps){
        return new inkEntity({
            ...props
        });
    }
}

