export {}; 

namespace BankSystem {
    let balance: number = 1000;

    export function deposit(amount: number): void {
        if (amount > 0) balance += amount;
    }

    export function withdraw(amount: number): void {
        if (amount > 0 && amount <= balance) balance -= amount;
    }

    export function getBalance(): number {
        return balance;
    }
}

BankSystem.deposit(500);
BankSystem.withdraw(200);
console.log(BankSystem.getBalance());   // 1300