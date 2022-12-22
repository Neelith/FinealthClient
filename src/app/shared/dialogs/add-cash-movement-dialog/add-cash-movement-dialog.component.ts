import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-cash-movement-dialog',
  templateUrl: './add-cash-movement-dialog.component.html',
  styleUrls: ['./add-cash-movement-dialog.component.scss'],
})
export class AddCashMovementDialogComponent {

  form: FormGroup;

  categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];

  private onlyDecimalNumbersAllowedRegex = '/^[0-9]+(.[0-9]{1,2}|,[0-9]{1,2})?$/';
  private onlyIntegerAllowedRegex = '/^[0-9]*$/';

  constructor(public dialogRef: MatDialogRef<AddCashMovementDialogComponent>) {
    // this.form = new FormGroup({
    //   description: new FormControl('', [Validators.maxLength(100)]),
    //   amount: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(this.onlyDecimalNumbersAllowedRegex),
    //   ]),
    //   categoryId: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(this.onlyIntegerAllowedRegex),
    //   ]),
    // });

    this.form = new FormGroup({
      description: new FormControl('', [Validators.maxLength(100)]),
      amount: new FormControl('', [
        Validators.required
      ]),
      categoryId: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onAddNewCashMovement() {
    this.dialogRef.close(this.form);
  }
}
