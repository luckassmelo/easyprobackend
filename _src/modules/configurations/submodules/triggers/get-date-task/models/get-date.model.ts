import { Entity } from '../../../../../../domain/entity/entity';

type ParameterToGetDate = {
    id: string;
}

export class GetDateOfTask extends Entity<ParameterToGetDate>{
    constructor(props: ParameterToGetDate, id?: string){
        super(props, id);
    }

    
    public getId() : string {
        return this.props.id;
    }
    
}