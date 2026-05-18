export {};

for (let i: number = 1; i <= 10; i++) {
    if (i === 3) continue;   // skip 3
    if (i === 7) break;      // stop at 7

    console.log(i);
}