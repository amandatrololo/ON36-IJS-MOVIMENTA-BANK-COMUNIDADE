"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(client, accountsId, agency) {
        this.client = client;
        this.accountsId = accountsId;
        this.agency = agency;
        this.balance = 0;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Dep\u00F3sito de R$".concat(amount, " realizado com sucesso. Saldo atual: R$").concat(this.balance));
    };
    BankAccount.prototype.cashWithdrawal = function (amount) {
        if (amount > this.balance) {
            console.log('Saldo insuficiente para saque.');
        }
        else {
            this.balance -= amount;
            console.log("Saque de R$".concat(amount, " realizado com sucesso. Saldo atual: R$").concat(this.balance));
        }
    };
    BankAccount.prototype.transferTo = function (destinationAccount, amount) {
        if (amount > this.balance) {
            console.log('Saldo insuficiente para transferência.');
        }
        else {
            this.balance -= amount;
            destinationAccount.deposit(amount);
            console.log("Transfer\u00EAncia de R$".concat(amount, " para a conta ").concat(destinationAccount.accountsId, " realizada com sucesso. Saldo atual: R$").concat(this.balance));
        }
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
