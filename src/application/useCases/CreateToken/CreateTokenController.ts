import { CreateTokenUseCase } from "./CreateTokenUseCase";

export class CreateTokenController {
    constructor(
        private createTokenUseCase: CreateTokenUseCase
    ){}
        
        
    async handle(body: any): Promise<any | void> {
        const { username, password} = body;

       
        
        try {
            const tokenResponse = await this
                                            .createTokenUseCase
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