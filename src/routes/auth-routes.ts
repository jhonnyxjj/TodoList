import { Router } from "express";
import { AuthController } from "../controllers/auth-controllers";

const authRouter = Router();

authRouter.post("/authentication", AuthController.login); // Rota de login


export default authRouter;