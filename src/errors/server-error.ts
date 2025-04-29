class ServerError extends Error {
    statusCode: any;
    constructor(name: string, statusCode: any, message: string | undefined) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
    }
}

export default ServerError;