import { IBanksAccount } from './IBankAccount';

export interface IClient {
    fullName: string;
    idClient: number;
    address: string;
    phone: string;
    accounts: IBanksAccount[];

    addBanksAccount(account: IBanksAccount): void;
    removeAccount(account: IBanksAccount): void;
}
