export {};

function parseInput(input: string | null): number {
    if (input === null) throw new TypeError("Input cannot be null");
    const result = Number(input);
    if (isNaN(result)) throw new RangeError("Input is not a valid number");
    return result;
}

try {
    console.log(parseInput(null));
} catch (error) {
    if (error instanceof TypeError) {
        console.log(`Type Error: ${error.message}`);
    } else if (error instanceof RangeError) {
        console.log(`Range Error: ${error.message}`);
    } else {
        console.log(`General Error: ${(error as Error).message}`);
    }
}