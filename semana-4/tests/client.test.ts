import { Client } from '../Client';
import { CurrentAccount } from '../CurrentAccount';
import { IClient } from '../Interfaces/IClient';
import { IBanksAccount } from '../Interfaces/IBankAccount';

describe('Client', () => {
  let client: IClient;
  let account: IBanksAccount;

  beforeEach(() => {
    client = new Client('Chaka Khan', 1, 'Rua Das Lindas', '123-456-7890');
    account = new CurrentAccount(client, 1001, 101, 500);
  });

  it('Deve adicionar uma conta bancária', () => {
    client.addBanksAccount(account);
    expect(client.accounts.length).toBe(1);
    expect(client.accounts[0]).toBe(account);
  });

  it('Não deve remover a mesma conta mais de uma vez', () => {
    client.addBanksAccount(account);
    client.addBanksAccount(account);
    expect(client.accounts.length).toBe(1);
  });

  it('Deve remover uma conta existente', () => {
    client.addBanksAccount(account);
    client.removeAccount(account);
    expect(client.accounts.length).toBe(0);
  });

  it('Não pode remover uma conta inexistente', () => {
    client.removeAccount(account);
    expect(client.accounts.length).toBe(0);
  });
});
