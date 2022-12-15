import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

type JwtResponse = {
  token: string;
}

export function jwtGenerator(payload: any): JwtResponse {
    return {token: jwt.sign({payload}, process.env.SECRET as string, {expiresIn: 2500, algorithm: 'HS512'})};
}




  
  
