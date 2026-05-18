export {};

namespace GameSettings {
    let volume: number = 50;
    let fullscreen: boolean = false;

    export function setVolume(value: number): void {
        if (value >= 0 && value <= 100) volume = value;
    }

    export function setFullscreen(value: boolean): void {
        fullscreen = value;
    }

    export function showSettings(): void {
        console.log(`Volume: ${volume}, Fullscreen: ${fullscreen}`);
    }
}

GameSettings.setVolume(80);
GameSettings.setFullscreen(true);
GameSettings.showSettings();   // Volume: 80, Fullscreen: true