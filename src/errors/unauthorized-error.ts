import serveError from "./server-error";

 export class UnauthorizedError extends serveError { 
    constructor(message: string) {
        super("Unauthorized", 401, message);
    }
    static invalidCredentials() {
        return new UnauthorizedError("Credenciais inválidas.");
    }
}