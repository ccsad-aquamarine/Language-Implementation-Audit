export {};

function greet(name: string, greeting: string = "Hello"): void {
    console.log(`${greeting} ${name}`);
}

greet("BOB");             // Hello BOB
greet("John Kaisen", "Welcome");    // Welcome John Kaisen