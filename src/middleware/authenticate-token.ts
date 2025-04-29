import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config/jwt-config";
import jwt from "jsonwebtoken";

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  console.log("Headers recebidos:", req.headers);

  const authHeader = req.headers["authorization"];
  console.log("Authorization header:", authHeader);

  if (!authHeader) {
    res.status(401).json({ message: "Token inválido ou expirado" });
    return;
  }

  const token = authHeader.split(" ")[1]; // Pega a segunda parte após o espaço
  if (!token) {
    res.status(401).json({ message: "Token inválido ou expirado" });
    return;
  }

  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: "Token inválido ou expirado" });
    } else {
      res.status(401).json({ message: "Token inválido ou expirado" });
    }
    return;
  }
}
