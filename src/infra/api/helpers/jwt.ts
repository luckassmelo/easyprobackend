import { token } from "../../../config/database";
import * as jwt from "jsonwebtoken";

type JwtResponse = {
  token: string;
}

export function jwtGenerator(payload: any): JwtResponse {
    return {token: jwt.sign({payload}, token.secret!, {expiresIn: 2500, algorithm: 'HS512'})};
}




  
  
