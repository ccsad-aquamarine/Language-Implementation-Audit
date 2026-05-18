export {};

async function printNumbers(label: string): Promise<void> {
    for (let i = 1; i <= 3; i++) {
        console.log(`${label}: ${i}`);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

async function main(): Promise<void> {
    await Promise.all([
        printNumbers("Task 1"),
        printNumbers("Task 2")
    ]);

    console.log("Both tasks done");
}

main();