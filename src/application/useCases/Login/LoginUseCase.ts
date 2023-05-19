import { ILdapRepository } from "../../repositories/ILdapRepository";
import { User } from "../../../domain/entities/user";
import {jwtGenerator} from "../../../infra/api/helpers/jwt"
import { UnauthorizedError } from "../../../../_src/infra/api/errors/unauthorized-error";

type LoginTyped = {
    windowsuser: string;
    password: string;
    id?: number;
    description?: string;
}

export class LoginUseCase{

    constructor(
        private ILdapRepository : ILdapRepository
    ){}
    
    async execute({windowsuser, password} : LoginTyped){
        
        const loginLdap = new User({
            windowsuser,
            password        
        }); 
    
        const response = await this.ILdapRepository.login(loginLdap);

        if (response === false) {
            throw new UnauthorizedError();            
        } 
        
        return jwtGenerator(loginLdap);
    }

  
}