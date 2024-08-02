import { IBanksAccount } from './Interfaces/IBankAccount';
import { IClient } from './Interfaces/IClient';

abstract class Account implements IBanksAccount {
    client: IClient;
    numberAccount: string;
    balance: number;
    agency: number;

    constructor(client: IClient, numberAccount: string, agency: number) {
        this.client = client;
        this.numberAccount = numberAccount;
        this.balance = 0;
        this.agency = agency;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive.');
        }
        this.balance += amount;
    }

    abstract cashWithdrawal(amount: number): void;

    transferTo(destinationAccount: IBanksAccount, amount: number): void {
        if (amount <= 0) {
            throw new Error('Transfer amount must be positive.');
        }
        if (amount > this.balance) {
            throw new Error('Insufficient funds for transfer.');
        }
        this.balance -= amount;
        destinationAccount.deposit(amount);
    }
}

export { Account };
