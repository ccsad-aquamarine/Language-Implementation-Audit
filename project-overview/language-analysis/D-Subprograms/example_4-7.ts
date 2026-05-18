export {};

function printInfo({ name, age }: { name: string; age: number }): void {
    console.log(`${name} is ${age} years old`);
}

printInfo({ name: "John Kaisen", age: 25 });
printInfo({ age: 30, name: "BOB" });