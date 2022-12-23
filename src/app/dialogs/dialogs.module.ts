import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DialogService } from './services/dialog.service';
import { AddCashMovementDialogComponent } from './add-cash-movement-dialog/add-cash-movement-dialog.component';
import { EditCashMovementDialogComponent } from './edit-cash-movement-dialog/edit-cash-movement-dialog.component';
import { AddEditCashMovementFormComponent } from './add-edit-cash-movement-form/add-edit-cash-movement-form.component';



@NgModule({
  declarations: [
    AddCashMovementDialogComponent,
    EditCashMovementDialogComponent,
    AddEditCashMovementFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [DialogService],
  exports: []
})
export class DialogsModule { }
