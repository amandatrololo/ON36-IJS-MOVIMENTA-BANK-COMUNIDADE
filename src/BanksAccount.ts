import { IBanksAccount } from './Interfaces/IBankAccount';
import { IClient } from './Interfaces/IClient';

export abstract class BankAccount implements IBanksAccount {
  client: IClient;
  accountsId: number;
  agency: number;
  balance: number;

  constructor(client: IClient, accountsId: number, agency: number) {
    this.client = client;
    this.accountsId = accountsId;
    this.agency = agency;
    this.balance = 0;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Depósito de R$${amount} realizado com sucesso. Saldo atual: R$${this.balance}`);
  }

  cashWithdrawal(amount: number): void {
    if (amount > this.balance) {
      console.log('Saldo insuficiente para saque.');
    } else {
      this.balance -= amount;
      console.log(`Saque de R$${amount} realizado com sucesso. Saldo atual: R$${this.balance}`);
    }
  }

  transferTo(destinationAccount: BankAccount, amount: number): void {
    if (amount > this.balance) {
      console.log('Saldo insuficiente para transferência.');
    } else {
      this.balance -= amount;
      destinationAccount.deposit(amount);
      console.log(`Transferência de R$${amount} para a conta ${destinationAccount.accountsId} realizada com sucesso. Saldo atual: R$${this.balance}`);
    }
  }
}
