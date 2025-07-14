import { Component, inject, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepositDialog } from './deposit-dialog/deposit-dialog';
import { Account } from '../../../classes/account';
import { Transaction } from '../../../classes/transaction';
import { TransactionType } from '../../../classes/transaction-type';
import { TransactionsService } from '../../../services/transactions-service';

@Component({
  selector: 'app-deposit-button',
  imports: [],
  templateUrl: './deposit-button.html',
  styleUrl: './deposit-button.css'
})
export class DepositButton {
  transactionsService = inject(TransactionsService);
  account = input.required<Account>();
  amount = 0;
  emitToUpdateAccounts = output<Transaction>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DepositDialog, {
      data: {account: this.account(), amount: this.amount}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.amount = result;
      if (this.amount > 0) {
        this.transactionsService.postTransaction(this.account(), this.amount, TransactionType.DEPOSIT).subscribe({
          next: (response) => this.emitToUpdateAccounts.emit(response),
          error: (error) => console.log(error)
        });
      }
    });
  }
}
