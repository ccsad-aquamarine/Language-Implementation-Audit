export {};

async function processItem(id: number): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return `Item ${id} processed`;
}

async function main(): Promise<void> {
    const results = await Promise.all(
        [0, 1, 2, 3, 4].map(i => processItem(i))
    );

    results.forEach(r => console.log(r));
    console.log("All items processed");
}

main();