import { ILdapRepository } from "../../repositories/ILdapRepository";
import { User } from "../../../domain/entities/user";
import {jwtGenerator} from "../../../infra/api/helpers/jwt"

type CreateToken = {
    username: string;
    password: string;
    token?: string;

}

export class CreateTokenUseCase{

    constructor(
        private ILdapRepository : ILdapRepository
    ){}
    
    async execute({username, password, token} : CreateToken){
        
        const loginLdap = new User({
            username,
            password,
            token
        }); 

        console.log(loginLdap);
        
        const logged = await this.ILdapRepository.login(loginLdap);

        return logged;
    }

  
}