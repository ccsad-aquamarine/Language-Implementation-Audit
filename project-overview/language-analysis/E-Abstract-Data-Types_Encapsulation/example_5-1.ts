export {};

namespace PlayerStats {
    let highScore: number = 0;

    export function setHighScore(score: number): void {
        if (score > highScore) highScore = score;
    }

    export function getHighScore(): number {
        return highScore;
    }
}

PlayerStats.setHighScore(200);
PlayerStats.setHighScore(150);
console.log(PlayerStats.getHighScore());   // 200