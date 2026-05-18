export {};

async function riskyOperation(): Promise<string> {
    throw new Error("Something went wrong");
}

async function main(): Promise<void> {
    try {
        const result = await riskyOperation();
        console.log(result);
    } catch (error) {
        console.log(`Caught: ${(error as Error).message}`);
    }
}

main();