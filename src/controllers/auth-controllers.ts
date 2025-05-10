import { Request, Response } from "express";
import { authenticationService } from "./instance";
import errors from "../errors/index";

export class AuthController {
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const token = await authenticationService.login(email, password);
      res.json({ token });
    } catch (e) {
      res.status(401).json({ error: errors.UnauthorizedError.invalidCredentials().message });
    }
  }
}
