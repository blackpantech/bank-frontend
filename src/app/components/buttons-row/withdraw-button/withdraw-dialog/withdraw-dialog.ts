import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-withdraw-dialog',
  imports: [MatFormFieldModule, MatDialogModule, MatInputModule, FormsModule],
  templateUrl: './withdraw-dialog.html',
  styleUrl: './withdraw-dialog.css'
})
export class WithdrawDialog {
  constructor(public dialogRef: MatDialogRef<WithdrawDialog>,@Inject(MAT_DIALOG_DATA) public data: any) {}
}
