export {};

let hasKey: boolean = true;
let doorOpen: boolean = false;

console.log(hasKey && doorOpen);  // AND - returns false
console.log(hasKey || doorOpen);  // OR  - returns true
console.log(!hasKey);            // NOT  - returns false