// REFACTORED — Clean Implementation
// Reusing variables instead of creating new objects
// Faster execution and significantly lower memory usage

export {};

const start = performance.now();
const before = process.memoryUsage().heapUsed;

let total: number = 0;
let x: number = 0;
let y: number = 0;
let z: number = 0;

for (let i = 0; i < 100000; i++) {
    x = i;
    y = i * 2;
    z = i * 3;
    total += x + y + z;
}

const end = performance.now();
const after = process.memoryUsage().heapUsed;

console.log("=== Variable Reuse ===");
console.log(`Total: ${total}`);
console.log(`Time: ${(end - start).toFixed(3)}ms`);
console.log(`Memory: ${after - before} bytes`);