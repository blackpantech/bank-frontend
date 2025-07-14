import { inject, Injectable } from '@angular/core';
import { Account } from '../classes/account';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private http = inject(HttpClient);

  baseUrl = environment.baseUrl;
  
  accounts: Account[] = [];

   getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(environment.baseUrl + '/accounts');
  }
}
