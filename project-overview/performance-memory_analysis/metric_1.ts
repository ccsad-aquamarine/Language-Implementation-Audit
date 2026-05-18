// Metric 1: Execution Time
// Comparing String Concatenation vs Array Join (StringBuilder equivalent in JS)

export {};

const start1 = performance.now();
let result1: string = "";
for (let i = 0; i < 10000; i++) {
    result1 += i.toString();
}
const end1 = performance.now();
console.log(`String Concatenation Time: ${(end1 - start1).toFixed(3)}ms`);

const start2 = performance.now();
const parts: string[] = [];
for (let i = 0; i < 10000; i++) {
    parts.push(i.toString());
}
const result2: string = parts.join("");
const end2 = performance.now();
console.log(`Array Join Time: ${(end2 - start2).toFixed(3)}ms`);