import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-deposit-dialog',
  imports: [MatFormFieldModule, MatDialogModule, MatInputModule, FormsModule],
  templateUrl: './deposit-dialog.html',
  styleUrl: './deposit-dialog.css'
})
export class DepositDialog {
  constructor(public dialogRef: MatDialogRef<DepositDialog>,@Inject(MAT_DIALOG_DATA) public data: any) {}
}
