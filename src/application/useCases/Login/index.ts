import { LoginController } from "./loginController";
import { LoginUseCase } from "./LoginUseCase";
import {LdapRepository} from "../../../infra/repository/LdapRepository";
import { ConnectionLdap } from "../../../infra/database";


const ldapRepository = new LdapRepository(ConnectionLdap);
const loginUseCase = new LoginUseCase(ldapRepository)
const loginController = new LoginController(loginUseCase)

export {loginController};