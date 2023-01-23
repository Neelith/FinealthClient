import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss'],
})
export class AddCategoryDialogComponent {
  buttonText: string = 'Aggiungi';
  form: FormGroup;
  iconUrls: string[];

  constructor(
    public dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: string[]
  ) {
    this.iconUrls = data;

    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      iconUrl: new FormControl('', [Validators.required]),
    });
  }

  onAddCategory(form: FormGroup) {
    this.dialogRef.close(form);
  }
}
