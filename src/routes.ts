import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) =>  {
    return response.status(200).json({message: 'Hello World!'});
});


export { router };