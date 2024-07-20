"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var Client_1 = require("./Client");
var CurrentAccount_1 = require("./CurrentAccount");
// Criar cliente
var cliente1 = new Client_1.Client('João Silva', 1, 'Rua A, 123', '(11) 1234-5678');
var cliente2 = new Client_1.Client('João Melo', 1, 'Rua b, 213', '(11) 1234-5988');
var cliente3 = new Client_1.Client('João Severion', 1, 'Rua c, 333', '(11) 1999-5678');
// Criar conta corrente para o cliente
var contaCorrente1 = new CurrentAccount_1.CurrentAccount(cliente1, 1001, 101, 500);
var contaCorrente2 = new CurrentAccount_1.CurrentAccount(cliente2, 5000, 201, 400);
var contaCorrente3 = new CurrentAccount_1.CurrentAccount(cliente3, 7000, 301, 600);
// Adicionar conta ao cliente
cliente1.addBanksAccount(contaCorrente1);
cliente2.addBanksAccount(contaCorrente2);
cliente3.addBanksAccount(contaCorrente3);
// Realizar operações
contaCorrente2.deposit(1000);
contaCorrente1.cashWithdrawal(1500);
contaCorrente1.transferTo(contaCorrente3, 200);
//Excluir Cliente
cliente2.removeAccount(contaCorrente2);
