import { credentials } from "../../../config/database";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import fsPromises from 'fs/promises';



export function jwtGenerator(payload: any){
    const syncToken = jwt.sign({payload}, process.env.SECRET as string, {expiresIn: 2500, algorithm: 'HS512'});
    console.log({TOKEN: syncToken});
    
    return {TOKEN: syncToken};
  }




  
  
