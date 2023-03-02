import { IinkRepository } from "../../repository/register.inks.repository";
import { InkEntity } from "../../entity/ink.entity";
import {InkProps} from "../../types/ink.types"
export class InksRegisterUseCase{

    constructor(
        private inksRepository: IinkRepository
    ) {}

    async execute(body: InkProps) {
        
        const result1 = new InkEntity({
            ...body
        })
        const result = await this.inksRepository.save(result1);

       return result;
    }

}
