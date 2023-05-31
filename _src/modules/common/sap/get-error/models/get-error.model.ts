import { Entity } from '../../../../../domain/entity/entity'

type parameterToCheckErrorProps = {
    id: string;
}

export class GetError extends Entity<parameterToCheckErrorProps> {
    constructor(props: parameterToCheckErrorProps){
        super(props);
    }
}