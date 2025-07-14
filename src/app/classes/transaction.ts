import { TransactionType } from "./transaction-type";

export class Transaction {
    id: number;
    date: Date;
    amount: number;
    transactionType: TransactionType;
    accountId: number;

    constructor(id: number, date: Date, amount: number, transactionType: TransactionType, accountId: number) {
        this.id = id;
        this.date = date;
        this.amount = amount;
        this.transactionType = transactionType;
        this.accountId = accountId;
    }
}
