"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(fullName, idClient, address, phone) {
        this.accounts = [];
        this.fullName = fullName;
        this.idClient = idClient;
        this.address = address;
        this.phone = phone;
    }
    Client.prototype.addBanksAccount = function (account) {
        if (this.accounts.some(function (acc) { return acc.accountsId === account.accountsId; })) {
            console.log("Erro: Conta ".concat(account.accountsId, " j\u00E1 associada!"));
            return;
        }
        this.accounts.push(account);
        console.log("Associa\u00E7\u00E3o da conta ".concat(account.accountsId, " realizada com sucesso!"));
    };
    Client.prototype.removeAccount = function (account) {
        var accountIndex = this.accounts.findIndex(function (acc) { return acc.accountsId === account.accountsId; });
        if (accountIndex !== -1) {
            this.accounts.splice(accountIndex, 1);
            console.log("Desassocia\u00E7\u00E3o da conta ".concat(account.accountsId, " realizada com sucesso!"));
        }
        else {
            console.log("Erro: Esta conta n\u00E3o est\u00E1 associada ao cliente!");
        }
    };
    return Client;
}());
exports.Client = Client;
