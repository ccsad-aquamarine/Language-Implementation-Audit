export {};

const multiply = (a: number, b: number): number => a * b;
const printMessage = (message: string): void => console.log(message);

console.log(multiply(4, 5));          // 20
printMessage("Hello from arrow");