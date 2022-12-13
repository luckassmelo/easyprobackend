import { CreateTokenUseCase } from "./CreateTokenUseCase";

export class CreateTokenController {
    constructor(
        private createTokenUseCase: CreateTokenUseCase
    ){}
        
        
    async handle(body: any): Promise<any | void> {
        const { username, password, token} = body;

        console.log('TESTE',username, password);
        
        try {
            const tokenResponse = await this
                                            .createTokenUseCase
                                            .execute({
                                             username,
                                             password,
                                             token
                                            });

            

            return (tokenResponse);
            
        } catch(error: any) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }        
    }
}