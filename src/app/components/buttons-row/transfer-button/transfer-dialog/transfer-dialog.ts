import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WithdrawDialog } from '../../withdraw-button/withdraw-dialog/withdraw-dialog';
import { MatOption, MatSelectModule } from "@angular/material/select";
import { Account } from '../../../../classes/account';
import { AccountsService } from '../../../../services/accounts-service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-transfer-dialog',
  imports: [MatFormFieldModule, MatDialogModule, MatInputModule, FormsModule, MatOption, MatSelectModule, NgFor],
  templateUrl: './transfer-dialog.html',
  styleUrl: './transfer-dialog.css'
})
export class TransferDialog {
  accountsService = inject(AccountsService);
  accounts: Account[] = [];
  errorMessage = "";

  constructor(public dialogRef: MatDialogRef<WithdrawDialog>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.accountsService.getAccounts().subscribe({
      next: (response) => this.accounts = response.filter(account => account.id != data.account.id),
      error: (error) => this.errorMessage = error
    })
  }
}
