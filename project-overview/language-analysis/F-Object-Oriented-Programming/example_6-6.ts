export {};

class Calculator {
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;
    add(a: number, b: number, c?: number): number {
        return c !== undefined ? a + b + c : a + b;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3));        // 8
console.log(calc.add(5, 3, 2));     // 10