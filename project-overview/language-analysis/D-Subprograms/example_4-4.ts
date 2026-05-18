export {};

function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3));          // 6
console.log(sumAll(1, 2, 3, 4, 5));    // 15