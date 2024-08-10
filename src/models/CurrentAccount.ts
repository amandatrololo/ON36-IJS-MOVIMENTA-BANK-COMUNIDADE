import { IBanksAccount } from '../Interfaces/IBankAccount';
import { Account } from '../Account';

export class CurrentAccount extends Account {
  specialCheckLimit: number;

  constructor(client: IBanksAccount, accountsId: number, agency: number, specialCheckLimit: number) {
    super(accountsId, agency, 0); // Supondo que a classe Account tenha um saldo inicial de 0
    this.specialCheckLimit = specialCheckLimit;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  cashWithdrawal(amount: number): void {
    if (amount > this.balance + this.specialCheckLimit) {
      console.log('Saldo insuficiente, incluindo cheque especial.');
    } else {
      this.balance -= amount;
      console.log(`Saque de R$${amount} realizado com sucesso. Saldo atual: R$${this.balance}`);
    }
  }

  transferTo(destinationAccount: IBanksAccount, amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      destinationAccount.deposit(amount);
      console.log(`Transferência de R$${amount} realizada com sucesso.`);
    } else {
      console.log('Saldo insuficiente para transferência.');
    }
  }
}
