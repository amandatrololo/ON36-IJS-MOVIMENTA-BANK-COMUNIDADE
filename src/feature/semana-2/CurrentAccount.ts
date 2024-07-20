import { BankAccount } from './BanksAccount';
import { IClient } from './Interfaces/IClient';

export class CurrentAccount extends BankAccount {
  specialCheckLimit: number;

  constructor(client: IClient, accountsId: number, agency: number, specialCheckLimit: number) {
    super(client, accountsId, agency);
    this.specialCheckLimit = specialCheckLimit;
  }

  cashWithdrawal(amount: number): void {
    if (amount > this.balance + this.specialCheckLimit) {
      console.log('Saldo insuficiente para saque, incluindo cheque especial.');
    } else {
      this.balance -= amount;
      console.log(`Saque de R$${amount} realizado com sucesso, incluindo cheque especial. Saldo atual: R$${this.balance}`);
    }
  }
}
