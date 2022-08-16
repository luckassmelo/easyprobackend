import { Request, Response } from "express";
import { GetAllTriggerUseCase } from "./GetAllTriggerUseCase";

export class GetAllTriggerController {
    constructor(
        private getAllTriggerUseCase: GetAllTriggerUseCase
    ){}

    async handle() {
        try {
            return await this.getAllTriggerUseCase.execute();
        } catch (error: any) {
            return ({
                message: error.message || "Unexpected error."
            });
        }
    }
}