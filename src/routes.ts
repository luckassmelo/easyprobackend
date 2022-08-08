import { Request, Response, Router } from 'express';
import { createTriggerController } from './application/useCases/CreateTrigger/index';
import { createTaskController } from './application/useCases/CreateTask/index';

const router = Router();

router.get('/', (request: Request, response: Response) =>  {
    return response.status(200).json({message: 'Hello World!'});
});


router.post('/api/trigger', (request: Request, response: Response) => {
    return createTriggerController.handle(request, response);
});

router.post('/api/task', (request: Request, response: Response) => {
    return createTaskController.handle(request, response);
});

export { router };