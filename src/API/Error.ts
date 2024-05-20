export class NotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotFoundError";
    }
}

export class UnexpectedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UnexpectedError";
    }
}

