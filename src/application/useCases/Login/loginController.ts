import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
    constructor(
        private LoginUseCase: LoginUseCase
    ){}
        

    async handle(body: any): Promise<any | void> {
        const { windowsuser, password} = body;  
        
            const tokenResponse = await this
                                            .LoginUseCase
                                            .execute({
                                             windowsuser,
                                             password,
                                            });

            

            return tokenResponse;
            
    }
}