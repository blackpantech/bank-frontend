import { Transaction } from "./transaction";

export class Account {
    id: number;
    balance: number;
    transactions: Transaction[];

    constructor(id: number, balance: number, transactions: Transaction[]) {
        this.id = id;
        this.balance = balance;
        this.transactions = transactions;
    }
}
