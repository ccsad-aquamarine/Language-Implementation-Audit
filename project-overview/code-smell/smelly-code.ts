// ORIGINAL — Smelly Code
// Creating new objects inside a loop
// Problem: creates 100,000 new objects — heavy on garbage collector

export {};

const start = performance.now();
const before = process.memoryUsage().heapUsed;

let total: number = 0;
for (let i = 0; i < 100000; i++) {
    const obj = { x: i, y: i * 2, z: i * 3 };
    total += obj.x + obj.y + obj.z;
}

const end = performance.now();
const after = process.memoryUsage().heapUsed;

console.log("=== Object Creation in Loop ===");
console.log(`Total: ${total}`);
console.log(`Time: ${(end - start).toFixed(3)}ms`);
console.log(`Memory: ${after - before} bytes`);