export {};

async function getScore(): Promise<number> {
    return new Promise(resolve => {
        setTimeout(() => resolve(100), 3000);
    });
}

async function main(): Promise<void> {
    const result = await getScore();
    console.log(`Score: ${result}`);   // Score: 100
}

main();