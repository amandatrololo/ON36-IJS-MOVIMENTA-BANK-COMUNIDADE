import { Request, Response } from 'express';
import { Client } from '../models/Client';
import { Manager } from '../models/Manager';

export class ClientController {
  private manager: Manager;

  constructor(manager: Manager) {
    this.manager = manager;
  }

  public createClient(req: Request, res: Response): void {
    const { fullName, idClient, address, phone } = req.body;
    const newClient = new Client(fullName, idClient, address, phone, this.manager);
    this.manager.addClient(newClient);
    res.status(201).json(newClient);
  }

  public deleteClient(req: Request, res: Response): void {
    const { idClient } = req.params;
    this.manager.removeClient(Number(idClient));
    res.status(204).send();
  }
}
