export {};

class Animal {
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }

        speak(): void {
            console.log(`${this.name} makes a sound`);
        }
    }

    class Dog extends Animal {
        constructor(name: string) {
            super(name);
        }

        speak(): void {
            console.log(`${this.name} says Woof`);
        }
    }

    const animal: Animal = new Dog("BOB");
    animal.speak();   // BOB says woof