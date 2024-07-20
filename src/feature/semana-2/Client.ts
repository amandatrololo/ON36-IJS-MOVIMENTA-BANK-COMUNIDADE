import { IClient } from './Interfaces/IClient';
import { IBanksAccount } from './Interfaces/IBankAccount';

export class Client implements IClient {
  fullName: string;
  idClient: number;
  address: string;
  phone: string;
  accounts: IBanksAccount[] = [];

  constructor(fullName: string, idClient: number, address: string, phone: string) {
    this.fullName = fullName;
    this.idClient = idClient;
    this.address = address;
    this.phone = phone;
  }

  addBanksAccount(account: IBanksAccount): void {
    if (this.accounts.some(acc => acc.accountsId === account.accountsId)) {
      console.log(`Erro: Conta ${account.accountsId} já associada!`);
      return;
    }

    this.accounts.push(account);
    console.log(`Associação da conta ${account.accountsId} realizada com sucesso!`);
  }

  removeAccount(account: IBanksAccount): void {
    const accountIndex = this.accounts.findIndex(acc => acc.accountsId === account.accountsId);
    if (accountIndex !== -1) {
      this.accounts.splice(accountIndex, 1);
      console.log(`Desassociação da conta ${account.accountsId} realizada com sucesso!`);
    } else {
      console.log(`Erro: Esta conta não está associada ao cliente!`);
    }
  }
}
