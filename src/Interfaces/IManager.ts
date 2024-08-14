import { IClient } from './IClient';

export interface IManager {
  fullName: string;
  id: number;
  clients: IClient[];

  addClient(client: IClient): void;
  removeClient(clientId: number): void;
  openAccount(clientId: number, accountType: string): void;
  closeAccount(clientId: number, accountId: number): void;
  modifyAccount(clientId: number, accountId: number, newAccountType: string): void;
}
