import { ILoginService } from "../domain/interfaces/interface-login-services";
import { JWT_SECRET } from "../config/jwt-config";

import errors from "../errors/index";
import jwt from "jsonwebtoken";

export class AuthenticationService implements ILoginService<string> {
  async login(email: string, password: string): Promise<string> {
    const validEmail = "usuario@exemplo.com";
    const validPassword = "senha123";

    if (email !== validEmail || password !== validPassword) {
      throw errors.UnauthorizedError.invalidCredentials();
    }

    // Gerar o token JWT com o email do usuário
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "30m" });
    
    if (!token) {
      throw new Error("Falha ao gerar o token JWT");
    }

    return token;
  }
}
