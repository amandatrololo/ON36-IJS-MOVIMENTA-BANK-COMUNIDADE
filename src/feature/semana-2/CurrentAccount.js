"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
var BanksAccount_1 = require("./BanksAccount");
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(client, accountsId, agency, specialCheckLimit) {
        var _this = _super.call(this, client, accountsId, agency) || this;
        _this.specialCheckLimit = specialCheckLimit;
        return _this;
    }
    CurrentAccount.prototype.cashWithdrawal = function (amount) {
        if (amount > this.balance + this.specialCheckLimit) {
            console.log('Saldo insuficiente para saque, incluindo cheque especial.');
        }
        else {
            this.balance -= amount;
            console.log("Saque de R$".concat(amount, " realizado com sucesso, incluindo cheque especial. Saldo atual: R$").concat(this.balance));
        }
    };
    return CurrentAccount;
}(BanksAccount_1.BankAccount));
exports.CurrentAccount = CurrentAccount;
