import { LoginUseCase } from "./LoginUseCase";
import { GenericLog } from "../../../../_src/domain/decorators/log.decorator";
import { saveGenericLoggin } from "../../../../_src/infra/database/respositories/save-loggin.repository";
export class LoginController {
    constructor(
        private LoginUseCase: LoginUseCase
    ){}
        
    @GenericLog({info: { message: "Token return"}, process: "Token response"}, saveGenericLoggin)   
    async handle(body: any): Promise<any | void> {
        console.log(body);
        const { windowsuser, password} = body;
        
        
       
        
        try {
            const tokenResponse = await this
                                            .LoginUseCase
                                            .execute({
                                             windowsuser,
                                             password,
                                            });

            

            return tokenResponse;
            
        } catch(error: any) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }        
    }
}