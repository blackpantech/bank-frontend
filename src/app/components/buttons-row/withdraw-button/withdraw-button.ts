import { Component, inject, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WithdrawDialog } from './withdraw-dialog/withdraw-dialog';
import { Account } from '../../../classes/account';
import { TransactionsService } from '../../../services/transactions-service';
import { TransactionType } from '../../../classes/transaction-type';
import { Transaction } from '../../../classes/transaction';

@Component({
  selector: 'app-withdraw-button',
  imports: [],
  templateUrl: './withdraw-button.html',
  styleUrl: './withdraw-button.css'
})
export class WithdrawButton {
  transactionsService = inject(TransactionsService);
  account = input.required<Account>();
  amount = 0;
  emitToUpdateAccounts = output<Transaction>();
  
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(WithdrawDialog, {
      data: {account: this.account(), amount: this.amount}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.amount = result;
      if (this.amount > 0) {
        this.transactionsService.postTransaction(this.account(), -this.amount, TransactionType.WITHDRAW).subscribe({
          next: (response) => this.emitToUpdateAccounts.emit(response),
          error: (error) => console.log(error)
        });
      }
    });
  }
}
