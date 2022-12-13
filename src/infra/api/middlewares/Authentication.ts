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

    const retorno = jwt.verify(JSON.stringify(req.body), process.env.SECRET as string, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token.",  err
        });
      }

      res.send(decoded);
    });

    console.log(retorno);
    res.send(retorno);
  }
}