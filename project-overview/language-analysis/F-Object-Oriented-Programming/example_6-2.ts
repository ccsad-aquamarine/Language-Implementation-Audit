export {};

class Animal {
    protected name: string;
    constructor(name: string) { this.name = name; }
    speak(): void { console.log(`${this.name} makes a sound`); }
}

class Dog extends Animal {
    speak(): void { console.log(`${this.name} says Woof`); }
}

class Cat extends Animal {
    speak(): void { console.log(`${this.name} says Meow`); }
}

const animals: Animal[] = [
    new Dog("BOB"),
    new Cat("John Kaisen"),
    new Animal("A black hole")
];

animals.forEach(a => a.speak());
// BOB says Woof
// John Kaisen says Meow
// A black hole makes a sound