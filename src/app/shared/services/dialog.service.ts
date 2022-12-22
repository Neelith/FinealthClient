import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCashMovementDialogComponent } from '../dialogs/add-cash-movement-dialog/add-cash-movement-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialogService: MatDialog) {}

  private openDialog(component: any) {
    return this.dialogService.open(component);
  }

  public showAddCashMovementDialog() {
    return this.openDialog(AddCashMovementDialogComponent);
  }
}
