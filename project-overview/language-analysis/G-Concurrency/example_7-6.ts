export {};

async function getUserName(id: number): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return `User_${id}`;
}

async function main(): Promise<void> {
    const name = await getUserName(67);
    console.log(`Name: ${name}`);   // Name: User_67
}

main();