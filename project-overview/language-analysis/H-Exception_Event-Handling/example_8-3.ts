export {};

function setAge(age: number): void {
    if (age < 0) throw new Error("Age cannot be negative");
    console.log(`Age set to ${age}`);
}

try {
    setAge(-5);
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}