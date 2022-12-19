import { ILdapRepository } from "../../repositories/ILdapRepository";
import { User } from "../../../domain/entities/user";
import {jwtGenerator} from "../../../infra/api/helpers/jwt"

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

        if (!response) return Error;
        
        return jwtGenerator(loginLdap);
    }

  
}