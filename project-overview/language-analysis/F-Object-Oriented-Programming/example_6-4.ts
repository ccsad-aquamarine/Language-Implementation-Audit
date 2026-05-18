export {};

interface IMovable {
    move(): void;
}

class Player implements IMovable {
    constructor(private name: string) { }

    move(): void {
        console.log(`${this.name} is moving`);
    }
}

class Enemy implements IMovable {
    constructor(private name: string) { }

    move(): void {
        console.log(`${this.name} is chasing`);
    }
}

const player: IMovable = new Player("BOB");
const enemy: IMovable = new Enemy("John Kaisen");

player.move();   // BOB is moving
enemy.move();    // John Kaisen is chasing