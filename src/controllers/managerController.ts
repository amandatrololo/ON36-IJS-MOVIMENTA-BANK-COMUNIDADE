import { Request, Response } from 'express';
import { Manager } from '../models/Manager';

export class ManagerController {
  private manager: Manager;

  constructor(manager: Manager) {
    this.manager = manager;
  }

  public openAccount(req: Request, res: Response): void {
    const { clientId, accountType } = req.body;
    this.manager.openAccount(Number(clientId), accountType);
    res.status(201).send('Conta aberta com sucesso.');
  }

  public closeAccount(req: Request, res: Response): void {
    const { clientId, accountId } = req.body;
    this.manager.closeAccount(Number(clientId), Number(accountId));
    res.status(200).send('Conta fechada com sucesso.');
  }

  public modifyAccount(req: Request, res: Response): void {
    const { clientId, accountId, newAccountType } = req.body;
    this.manager.modifyAccount(Number(clientId), Number(accountId), newAccountType);
    res.status(200).send('Conta modificada com sucesso.');
  }
}
