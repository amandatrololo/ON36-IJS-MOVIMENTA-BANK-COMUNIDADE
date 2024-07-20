import{Client} from "./Client";

abstract class Account{
    //idClient: any;
    numberAccount: string;
    balance: number;

    constructor(numberAccount: string,  balance: number){
    
        this.balance = balance;
        this.numberAccount = numberAccount;
    }

    cashWithdrawal(amount:number):void{
        


    }

    transferTo(amount: number):void{
        this.balance += amount;

    }

    

}