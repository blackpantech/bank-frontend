import { Component, input, output } from '@angular/core';
import { WithdrawButton } from "./withdraw-button/withdraw-button";
import { DepositButton } from "./deposit-button/deposit-button";
import { TransferButton } from "./transfer-button/transfer-button";
import { Account } from '../../classes/account';
import { Transaction } from '../../classes/transaction';

@Component({
  selector: 'app-buttons-row',
  imports: [WithdrawButton, DepositButton, TransferButton],
  templateUrl: './buttons-row.html',
  styleUrl: './buttons-row.css'
})
export class ButtonsRow {
  account = input.required<Account>();
  emitToUpdateAccounts = output<Transaction>();

  updateAccounts(transaction: Transaction) {
    this.emitToUpdateAccounts.emit(transaction);
  }
}
