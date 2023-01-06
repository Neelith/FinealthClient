import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.scss'],
})
export class EditCategoryDialogComponent {
  buttonText: string = 'Edit';
  form: FormGroup;
  iconUrls: string[];
  categoryToEdit!: Category;

  constructor(
    public dialogRef: MatDialogRef<EditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.iconUrls = data.iconUrls;
    this.categoryToEdit = data.category;

    this.form = new FormGroup({
      name: new FormControl(this.categoryToEdit.name, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      iconUrl: new FormControl(this.categoryToEdit.iconUrl, [
        Validators.required,
      ]),
    });
  }

  onEditCategory(form: FormGroup) {
    this.dialogRef.close(form);
  }
}
