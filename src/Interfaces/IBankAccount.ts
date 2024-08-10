import { IClient } from "./IClient";

export interface IBanksAccount{
    client: IClient;
    accountsId: number;
    agency: number;
    balance: number;
    
    deposit(amount: number): void;
    cashWithdrawal(amount: number): void;
    transferTo(destinationAccount: IBanksAccount, amount: number): void;
  }