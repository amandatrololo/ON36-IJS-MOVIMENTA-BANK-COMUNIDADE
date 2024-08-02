import { BankAccount } from './BanksAccount';
import { IClient } from './Interfaces/IClient';

class CurrentAccount extends BankAccount {
    specialCheckLimit: number;

    constructor(client: IClient, accountsId: number, agency: number, specialCheckLimit: number) {
        super(client, accountsId, agency);
        this.specialCheckLimit = specialCheckLimit;
    }

    cashWithdrawal(amount: number): void {
        if (amount > this.balance + this.specialCheckLimit) {
            throw new Error('Saldo insuficiente, mesmo com o limite do cheque especial');
        }
        this.balance -= amount;
    }
}

export { CurrentAccount };
