export {};

type EventHandler = () => void;

class Player {
    private health: number = 100;
    private deathHandlers: EventHandler[] = [];

    onDeath(handler: EventHandler): void {
        this.deathHandlers.push(handler);
    }

    takeDamage(amount: number): void {
        this.health -= amount;
        console.log(`Player took ${amount} damage`);
        if (this.health <= 0) {
            this.deathHandlers.forEach(h => h());
        }
    }
}

const player = new Player();
player.onDeath(() => console.log("Player has died!"));
player.onDeath(() => console.log("Respawning player..."));
player.takeDamage(100);
// Player took 100 damage
// Player has died!
// Respawning player...