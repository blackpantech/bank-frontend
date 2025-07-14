import { Component, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ButtonsRow } from "../buttons-row/buttons-row";
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Accounts } from "../accounts/accounts";
import { Account } from '../../classes/account';
import { Transaction } from '../../classes/transaction';

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, ButtonsRow, DatePipe, CurrencyPipe, Accounts],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  isSidebarCollapsed = true;
  
  currentAccount: Account = {
    id: 0,
    balance:0,
    transactions: []
  };

  @ViewChild(Accounts)
  accountsComponent = {} as Accounts;
  
  openAccountDetails(currentAccount: Account) {
    this.currentAccount = currentAccount;
    this.onSidebarToggle();
  }

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  
  updateAccounts(transaction: Transaction) {
    this.accountsComponent.updateAccounts();
    this.currentAccount.transactions.push(transaction);
  }
}
