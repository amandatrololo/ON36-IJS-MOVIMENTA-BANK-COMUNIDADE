import { Manager } from '../Manager';
import { Client } from '../Client';
import { CurrentAccount } from '../CurrentAccount';
import { BankAccount } from '../BanksAccount';

describe('Manager', () => {
  let manager: Manager;
  let client: Client;
  let bankAccount: BankAccount

  beforeEach(() => {
    manager = new Manager();
    client = new Client('John Doe', 1, '123 Main St', '555-555-5555');
  });

  test('should open a current account for a client', () => {
    const account = manager.openAccount(client, 'current', 101, 123, 500);
    expect(account).toBeInstanceOf(CurrentAccount);
    expect(account.accountsId).toBe(101);
    expect(account.balance).toBe(0);
  });

  test('should close an account for a client', () => {
    const account = manager.openAccount(client, 'current', 102, 123, 500);
    manager.closeAccount(client, account);
    expect(client.accounts.length).toBe(0);
  });

  test('should modify account type', () => {
    const account = manager.openAccount(client, 'current', 103, 123, 500);
    const newAccount = manager.modifyAccountType(client, account, 'current', 123, 600);
    expect(newAccount.specialCheckLimit).toBe(600);
  });
});
