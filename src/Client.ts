import { IClient } from './Interfaces/IClient';
import { IBanksAccount } from './Interfaces/IBankAccount';
import { IManager } from './Interfaces/IManager';

class Client implements IClient {
    fullName: string;
    idClient: number;
    address: string;
    phone: string;
    accounts: IBanksAccount[] = [];
    manager: IManager;

    constructor(fullName: string, idClient: number, address: string, phone: string, manager: IManager) {
        this.fullName = fullName;
        this.idClient = idClient;
        this.address = address;
        this.phone = phone;
        this.manager = manager;
    }

    addBanksAccount(account: IBanksAccount): void {
        if (this.accounts.some(acc => acc.accountsId === account.accountsId)) {
            throw new Error(`Account ${account.accountsId} already associated.`);
        }

        this.accounts.push(account);
    }

    removeAccount(account: IBanksAccount): void {
        const accountIndex = this.accounts.findIndex(acc => acc.accountsId === account.accountsId);
        if (accountIndex === -1) {
            throw new Error(`Account ${account.accountsId} not found.`);
        }
        this.accounts.splice(accountIndex, 1);
    }
}

export { Client };
