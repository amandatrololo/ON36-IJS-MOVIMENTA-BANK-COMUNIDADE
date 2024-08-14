import { IBanksAccount } from './IBankAccount';
import { IManager } from './IManager';

export interface IClient {
    fullName: string;
    idClient: number;
    address: string;
    phone: string;
    accounts: IBanksAccount[];
    manager: IManager;

    addBanksAccount(account: IBanksAccount): void;
    removeAccount(account: IBanksAccount): void;
}
