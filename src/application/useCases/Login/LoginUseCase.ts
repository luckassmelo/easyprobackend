import { ILdapRepository } from "../../repositories/ILdapRepository";
import { User } from "../../../domain/entities/user";
import {jwtGenerator} from "../../../infra/api/helpers/jwt"

type LoginTyped = {
    username: string;
    password: string;
}

export class LoginUseCase{

    constructor(
        private ILdapRepository : ILdapRepository
    ){}
    
    async execute({username, password} : LoginTyped){
        
        const loginLdap = new User({
            username,
            password        
        }); 
    
        const response = await this.ILdapRepository.login(loginLdap);

        if (!response) return false;
        
        return jwtGenerator(loginLdap);
    }

  
}