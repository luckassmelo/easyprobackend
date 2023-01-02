import { token } from "../../../config/database";
import * as jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";


export default class Auth {
  public async authmiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ):
    Promise<any> {


    jwt.verify(req.headers.authorization as string, token.secret!, (err: any) => {
     if (err) return res.status(401).json({'Authenticated': false});   
     

      next();
      res.status(200).send({'Authenticated': true})
    });
  }

}