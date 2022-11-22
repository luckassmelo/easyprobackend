import { Request, Response } from "express";

export default class NotFound {
    public async notFoundHandler (
        req: Request,
        res: Response
    ) : Promise <void> {
        res.status(404).send('Route does not exist. 😞') 
    }
}