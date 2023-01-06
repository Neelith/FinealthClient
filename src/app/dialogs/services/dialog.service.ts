import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Category } from 'src/app/entities/category';
import { AddCashMovementDialogComponent } from '../add-cash-movement-dialog/add-cash-movement-dialog.component';
import { AddCategoryDialogComponent } from '../add-category-dialog/add-category-dialog.component';
import { EditCashMovementDialogComponent } from '../edit-cash-movement-dialog/edit-cash-movement-dialog.component';
import { EditCategoryDialogComponent } from '../edit-category-dialog/edit-category-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialogService: MatDialog) {}

  private openDialog(component: any) {
    return this.dialogService.open(component);
  }

  private openDialogWithData(component: any, data : any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    return this.dialogService.open(component, dialogConfig);
  }

  public showAddCashMovementDialog(data : Category[]) {
    return this.openDialogWithData(AddCashMovementDialogComponent, data);
  }

  public showEditCashMovementDialog(data : any) {
    return this.openDialogWithData(EditCashMovementDialogComponent, data);
  }

  public showAddCategoryDialog(data : any) {
    return this.openDialogWithData(AddCategoryDialogComponent, data);
  }

  public showEditCategoryDialog(data : any) {
    return this.openDialogWithData(EditCategoryDialogComponent, data);
  }
}
