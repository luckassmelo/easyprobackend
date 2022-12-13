import { credentials } from "../../../config/database";
import * as jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";


export default class Auth {
  public async authmiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ):
    Promise<any> {
    const teste = req.header()
    console.log(teste);
    
     jwt.verify('teste', process.env.SECRET as string, (err: any , decoded: any )=> {
      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token.",  err
        });
      }

      res.send(decoded);
      next();
      
    });


  }
}