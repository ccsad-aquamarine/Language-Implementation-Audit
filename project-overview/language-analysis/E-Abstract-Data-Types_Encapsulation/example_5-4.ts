export {};

namespace Counter {
    let count: number = 0;

    export const increment = (): void => { count++; };
    export const decrement = (): void => { if (count > 0) count--; };
    export const reset = (): void => { count = 0; };
    export const getCount = (): number => count;
}

Counter.increment();
Counter.increment();
Counter.increment();
Counter.decrement();
console.log(Counter.getCount());   // 2
Counter.reset();
console.log(Counter.getCount());   // 0