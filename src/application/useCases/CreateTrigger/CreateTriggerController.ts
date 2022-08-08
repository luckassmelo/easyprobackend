import { Request, Response } from "express";
import { CreateTriggerUseCase } from "./CreateTriggerUseCase";

export class CreateTriggerController {
    constructor(
        private createTriggerUseCase: CreateTriggerUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { description, triggerTypeId, value, status, group, machine, userId } = request.body;
            
            const triggerResponse = await this
                                              .createTriggerUseCase
                                              .execute({ description,
                                                        triggerTypeId,
                                                        value,
                                                        status,
                                                        group,
                                                        machine,
                                                        userId
                                                });

            return response.status(201).json(triggerResponse);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}