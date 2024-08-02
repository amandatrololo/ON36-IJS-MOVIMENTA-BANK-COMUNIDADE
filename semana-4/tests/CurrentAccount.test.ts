import { Client } from '../Client';
import { CurrentAccount } from '../CurrentAccount';
import { IClient } from '../Interfaces/IClient';

describe('CurrentAccount', () => {
  let client: IClient;
  let account: CurrentAccount;

  beforeEach(() => {
    client = new Client('Raymundo Kirk Rogahn ', 12, 'Travessa Dourados', '96997635986');
    account = new CurrentAccount(client, 1001, 101, 500);
  });

  it('Deve depositar dinheiro', () => {
    account.deposit(1000);
    expect(account.balance).toBe(1000);
  });

  it('Deve sacar dinheiro que esteja dentro do saldo positivo', () => {
    account.deposit(1000);
    account.cashWithdrawal(1200);
    expect(account.balance).toBe(-200);
  });

  it('Não pode sacar nem usar o cheque especial que esteja fora do limite', () => {
    account.deposit(1000);
    account.cashWithdrawal(1600);
    expect(account.balance).toBe(1000);
  });

  it('Deve transferir para outra conta', () => {
    const anotherClient = new Client('Chaka Khan', 2, 'Rua dos Irmaos', '96997141677');
    const anotherAccount = new CurrentAccount(anotherClient, 1002, 102, 400);
    account.deposit(1000);
    account.transferTo(anotherAccount, 500);
    expect(account.balance).toBe(500);
    expect(anotherAccount.balance).toBe(500);
  });
});
