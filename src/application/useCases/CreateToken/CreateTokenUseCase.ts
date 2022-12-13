import { ILdapRepository } from "../../repositories/ILdapRepository";
import { User } from "../../../domain/entities/user";
import {jwtGenerator} from "../../../infra/api/helpers/jwt"

type CreateToken = {
    username: string;
    password: string;
   
    // return: boolean;

}

export class CreateTokenUseCase{

    constructor(
        private ILdapRepository : ILdapRepository
    ){}
    
    async execute({username, password} : CreateToken){
        
        const loginLdap = new User({
            username,
            password
        
        }); 
    
        const logged = await this.ILdapRepository.login(loginLdap);

        if (logged) {
            return jwtGenerator(loginLdap);
        }else{
            console.log('deu errado');
            return false;
        }
        
    }

  
}