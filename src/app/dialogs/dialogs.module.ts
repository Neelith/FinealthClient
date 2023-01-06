import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DialogService } from './services/dialog.service';
import { AddCashMovementDialogComponent } from './add-cash-movement-dialog/add-cash-movement-dialog.component';
import { EditCashMovementDialogComponent } from './edit-cash-movement-dialog/edit-cash-movement-dialog.component';
import { AddEditCashMovementFormComponent } from './add-edit-cash-movement-form/add-edit-cash-movement-form.component';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { EditCategoryDialogComponent } from './edit-category-dialog/edit-category-dialog.component';
import { AddEditCategoryFormComponent } from './add-edit-category-form/add-edit-category-form.component';



@NgModule({
  declarations: [
    AddCashMovementDialogComponent,
    EditCashMovementDialogComponent,
    AddEditCashMovementFormComponent,
    AddCategoryDialogComponent,
    EditCategoryDialogComponent,
    AddEditCategoryFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [DialogService],
  exports: []
})
export class DialogsModule { }
