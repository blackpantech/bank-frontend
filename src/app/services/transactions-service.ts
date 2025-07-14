import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../classes/account';
import { environment } from '../environment';
import { Transaction } from '../classes/transaction';
import { TransactionType } from '../classes/transaction-type';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private http = inject(HttpClient);

  baseUrl = environment.baseUrl;

  postTransaction(account: Account, amount: number, transactionType: TransactionType): Observable<Transaction> {
    return this.http.post<Transaction>(environment.baseUrl + '/transactions', {
      accountId: account.id,
      date: new Date(),
      amount: amount,
      transactionType: transactionType
    });
  }
}
