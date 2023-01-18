import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-add-cash-movement-dialog',
  templateUrl: './add-cash-movement-dialog.component.html',
  styleUrls: ['./add-cash-movement-dialog.component.scss'],
})
export class AddCashMovementDialogComponent {
  categories: Category[];
  buttonText: string = 'Aggiungi';
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCashMovementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Category[]
  ) {
    this.categories = data;

    this.form = new FormGroup({
      description: new FormControl('', [Validators.maxLength(100)]),
      amount: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      date: new FormControl(new Date(), [Validators.required]),
    });
  }

  onAddNewCashMovement(form: FormGroup) {
    this.dialogRef.close(form);
  }
}
