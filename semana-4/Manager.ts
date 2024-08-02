import { IBanksAccount } from './Interfaces/IBankAccount';
import { CurrentAccount } from './CurrentAccount';
import { Client } from './Client';

class Manager {
    openAccount(client: Client, accountType: 'current', accountsId: number, agency: number, specialCheckLimit: number = 0): IBanksAccount {
        let account: IBanksAccount | null = null;

        if (accountType === 'current') {
            account = new CurrentAccount(client, accountsId, agency, specialCheckLimit);
            client.addBanksAccount(account);
        }
      

        if (!account) {
            throw new Error(`Tipo de conta ${accountType} não suportado.`);
        }

        console.log(`Tipo de conta ${accountType} aberto para o cliente ${client.fullName}.`);
        return account;
    }

    closeAccount(client: Client, account: IBanksAccount): void {
        client.removeAccount(account);
        console.log(`Conta ${account.accountsId} fechada para o cliente ${client.fullName}.`);
    }

    modifyAccountType(client: Client, currentAccount: IBanksAccount, newAccountType: 'current', agency: number, specialCheckLimit: number = 0): IBanksAccount {
       
        this.closeAccount(client, currentAccount);

       
        const newAccount = this.openAccount(client, newAccountType, currentAccount.accountsId, agency, specialCheckLimit);

        console.log(`Tipo de conta do cliente ${client.fullName} modificada para ${newAccountType}.`);
        return newAccount;
    }
}

export { Manager };
