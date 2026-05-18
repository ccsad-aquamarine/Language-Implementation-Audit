export {};

try {
    const numbers: number[] = [1, 2, 3];
    const value = numbers[5];
    if (value === undefined) throw new Error("Index out of bounds");
    console.log(value);
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
} finally {
    console.log("This always runs");
}