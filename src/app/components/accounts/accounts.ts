import { Component, inject, input, output } from '@angular/core';
import { Account } from '../../classes/account';
import { CurrencyPipe } from '@angular/common';
import { AccountsService } from '../../services/accounts-service';

@Component({
  selector: 'app-accounts',
  imports: [CurrencyPipe],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css'
})
export class Accounts {
  accounts: Account[] = [];
  openAccountDetailsEvent = output<Account>();
  accountsService = inject(AccountsService);
  errorMessage: any;

  constructor() {
    this.updateAccounts();
  }
  
  openAccountDetails(currentAccount: Account) {
    this.openAccountDetailsEvent.emit(currentAccount);
  }

  updateAccounts() {
    this.accountsService.getAccounts().subscribe({
      next: (response) => this.accounts = response,
      error: (error) => this.errorMessage = error
    })
  }
}
