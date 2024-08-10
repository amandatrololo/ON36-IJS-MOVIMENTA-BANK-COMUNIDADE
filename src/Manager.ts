import { IManager } from './Interfaces/IManager';
import { IClient } from './Interfaces/IClient';
import { CurrentAccount } from './CurrentAccount'; // Certifique-se que este caminho está correto

export class Manager implements IManager {
  fullName: string;
  id: number;
  clients: IClient[] = [];

  constructor(fullName: string, id: number) {
    this.fullName = fullName;
    this.id = id;
  }

  addClient(client: IClient): void {
    this.clients.push(client);
    console.log(`Cliente ${client.fullName} adicionado pelo gerente ${this.fullName}.`);
  }

  removeClient(clientId: number): void {
    const index = this.clients.findIndex(client => client.idClient === clientId);
    if (index !== -1) {
      const removedClient = this.clients.splice(index, 1)[0];
      console.log(`Cliente ${removedClient.fullName} removido pelo gerente ${this.fullName}.`);
    } else {
      console.log('Cliente não encontrado.');
    }
  }

  openAccount(clientId: number, accountType: string): void {
    const client = this.clients.find(client => client.idClient === clientId);
    if (client) {
      let newAccount;
      if (accountType === 'current') {
        newAccount = new CurrentAccount(client, Math.floor(Math.random() * 10000), 101, 500);
        client.addBanksAccount(newAccount);
        console.log(`Conta corrente aberta para o cliente ${client.fullName}.`);
      }
      // Adicionar mais tipos de contas conforme necessário
    } else {
      console.log('Cliente não encontrado.');
    }
  }

  closeAccount(clientId: number, accountId: number): void {
    const client = this.clients.find(client => client.idClient === clientId);
    if (client) {
      const account = client.accounts.find((acc: { accountsId: number; }) => acc.accountsId === accountId);
      if (account) {
        client.removeAccount(account);
        console.log(`Conta ${accountId} fechada para o cliente ${client.fullName}.`);
      } else {
        console.log('Conta não encontrada.');
      }
    } else {
      console.log('Cliente não encontrado.');
    }
  }

  modifyAccount(clientId: number, accountId: number, newAccountType: string): void {
    const client = this.clients.find(client => client.idClient === clientId);
    if (client) {
      const accountIndex = client.accounts.findIndex(acc => acc.accountsId === accountId);
      if (accountIndex !== -1) {
        const oldAccount = client.accounts[accountIndex];
        client.removeAccount(oldAccount);
        this.openAccount(clientId, newAccountType);
        console.log(`Conta ${accountId} modificada para o tipo ${newAccountType} para o cliente ${client.fullName}.`);
      } else {
        console.log('Conta não encontrada.');
      }
    } else {
      console.log('Cliente não encontrado.');
    }
  }
}
