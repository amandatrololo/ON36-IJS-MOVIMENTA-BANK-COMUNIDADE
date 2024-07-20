// index.ts
import { Client } from './Client';
import { CurrentAccount } from './CurrentAccount';
import { IClient } from './Interfaces/IClient';

// Criar cliente
const cliente1: IClient = new Client('João Silva', 1, 'Rua A, 123', '(11) 1234-5678');
const cliente2: IClient = new Client('João Melo', 1, 'Rua b, 213', '(11) 1234-5988');
const cliente3: IClient = new Client('João Severion', 1, 'Rua c, 333', '(11) 1999-5678');

// Criar conta corrente para o cliente
const contaCorrente1 = new CurrentAccount(cliente1, 1001, 101, 500);
const contaCorrente2 = new CurrentAccount(cliente2, 5000, 201, 400);
const contaCorrente3 = new CurrentAccount(cliente3, 7000, 301, 600);

// Adicionar conta ao cliente
cliente1.addBanksAccount(contaCorrente1);
cliente2.addBanksAccount(contaCorrente2);
cliente3.addBanksAccount(contaCorrente3);
// Realizar operações
contaCorrente2.deposit(1000);
contaCorrente1.cashWithdrawal(1500);
contaCorrente1.transferTo(contaCorrente3, 200);

//Excluir Cliente
cliente2.removeAccount(contaCorrente2)
