export {};

namespace Inventory {
        let items: string[] = [];

        export function addItem(item: string): void {
            if (item && item.trim() !== "") items.push(item);
        }

        export function removeItem(item: string): void {
            items = items.filter(i => i !== item);
        }

        export function showItems(): void {
            items.forEach(item => console.log(item));
        }

        export function getCount(): number {
            return items.length;
        }
    }

    Inventory.addItem("Sword");
    Inventory.addItem("Shield");
    Inventory.addItem("");
    Inventory.showItems();
    console.log(Inventory.getCount());   // 2