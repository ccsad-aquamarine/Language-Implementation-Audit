// Metric 2: Memory Footprint
// Comparing String Concatenation vs Array Join (StringBuilder equivalent in JS)

import process from "process";

export {};

const before1 = process.memoryUsage().heapUsed;
let result3: string = "";
for (let i = 0; i < 10000; i++) {
    result3 += i.toString();
}
const after1 = process.memoryUsage().heapUsed;
console.log(`String Concatenation Memory: ${after1 - before1} bytes`);

const before2 = process.memoryUsage().heapUsed;
const parts2: string[] = [];
for (let i = 0; i < 10000; i++) {
    parts2.push(i.toString());
}
const result4: string = parts2.join("");
const after2 = process.memoryUsage().heapUsed;
console.log(`Array Join Memory: ${after2 - before2} bytes`);