import { Component, inject, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransferDialog } from './transfer-dialog/transfer-dialog';
import { Account } from '../../../classes/account';
import { Transaction } from '../../../classes/transaction';
import { TransactionType } from '../../../classes/transaction-type';
import { TransactionsService } from '../../../services/transactions-service';

@Component({
  selector: 'app-transfer-button',
  imports: [],
  templateUrl: './transfer-button.html',
  styleUrl: './transfer-button.css'
})
export class TransferButton {
  transactionsService = inject(TransactionsService);
  account = input.required<Account>();
  amount = 0;
  selectedAccount: Account = new Account(0, 0, []);
  emitToUpdateAccounts = output<Transaction>();
  
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TransferDialog, {
      data: {account: this.account(), amount: this.amount, selectedAccount: this.selectedAccount}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.amount = result.amount;
      this.selectedAccount = result.selectedAccount;
      if (this.amount > 0) {
        this.transactionsService.postTransaction(this.account(), -this.amount, TransactionType.TRANSFER).subscribe({
          next: (debitResponse) => {
            this.transactionsService.postTransaction(this.selectedAccount, this.amount, TransactionType.TRANSFER).subscribe({
              next: (creditResponse) => this.emitToUpdateAccounts.emit(debitResponse),
              error: (error) => console.log(error)
            });
          },
          error: (error) => console.log(error)
        });
      }
    });
  }
}
