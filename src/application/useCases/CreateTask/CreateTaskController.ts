import {Request, Response} from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
    constructor(
        private createTaskUseCase: CreateTaskUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId, triggerId, description, closed } = request.body;

        try {
            const taskResponse = await this
                                            .createTaskUseCase
                                            .execute({
                                                triggerId,
                                                userId,
                                                description,
                                                closed
                                            });

            return response.status(201).json(taskResponse);
        } catch(error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}