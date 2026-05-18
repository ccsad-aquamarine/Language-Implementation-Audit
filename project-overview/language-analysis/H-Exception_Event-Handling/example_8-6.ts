

function readConfig(): string {
    throw new Error("Config file not found");
}

function loadApp(): void {
    try {
        const config = readConfig();
        console.log(config);
    } catch (error) {
        console.log(`App failed to load: ${(error as Error).message}`);
        throw error;
    }
}

try {
    loadApp();
} catch (error) {
    console.log(`Top level caught: ${(error as Error).message}`);
}