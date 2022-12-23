import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-edit-cash-movement-dialog',
  templateUrl: './edit-cash-movement-dialog.component.html',
  styleUrls: ['./edit-cash-movement-dialog.component.scss'],
})
export class EditCashMovementDialogComponent {
  categories: Category[];
  buttonText: string = 'Edit';
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditCashMovementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.categories = data.categories;
    this.form = new FormGroup({
      description: new FormControl(data.cashMovement.description, [
        Validators.maxLength(100),
      ]),
      amount: new FormControl(data.cashMovement.amount, [Validators.required]),
      categoryId: new FormControl(data.cashMovement.categoryId, [
        Validators.required,
      ]),
      date: new FormControl(new Date(), [Validators.required]),
    });
  }

  onEditNewCashMovement(form: FormGroup) {
    this.dialogRef.close(this.form);
  }
}
