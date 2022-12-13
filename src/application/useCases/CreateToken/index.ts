import { CreateTokenController } from "./CreateTokenController";
import { CreateTokenUseCase } from "./CreateTokenUseCase";
import {ldapLogon} from "../../../infra/repository/LdapRepository";
const connection = new ldapLogon()
const createTokenUseCase = new CreateTokenUseCase(connection)
const createTokenController = new CreateTokenController( createTokenUseCase)


export {createTokenUseCase, createTokenController};