import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
    constructor(
        private LoginUseCase: LoginUseCase
    ){}
        
        
    async handle(body: any): Promise<any | void> {
        const { username, password} = body;

       
        
        try {
            const tokenResponse = await this
                                            .LoginUseCase
                                            .execute({
                                             username,
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