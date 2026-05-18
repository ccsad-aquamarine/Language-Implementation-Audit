export {};

function createMultiplier(factor: number): (n: number) => number {
    return (number: number) => number * factor;
}

const triple = createMultiplier(3);
console.log(triple(5));    // 15
console.log(triple(10));   // 30