import {InkEntity} from '../entity/ink.entity'

export interface IfindByIdProcess {
    return(id:number): Promise<InkEntity>
}