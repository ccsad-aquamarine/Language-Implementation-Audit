export {};

class InvalidHealthError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidHealthError";
    }
}

function validateHealth(health: number): void {
    if (health < 0) throw new InvalidHealthError("Health cannot be below zero");
}

try {
    validateHealth(-10);
} catch (error) {
    if (error instanceof InvalidHealthError) {
        console.log(`Custom Error: ${error.message}`);
    }
}