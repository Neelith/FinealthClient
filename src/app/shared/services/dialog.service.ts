import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCashMovementDialogComponent } from '../dialogs/add-cash-movement-dialog/add-cash-movement-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialogService : MatDialog) { }

  //voglio strutturare questa classe come wrapper di MatDialog e usarla come servizio per generare le dialog
  private openDialog(component : any) {
    const dialogRef = this.dialogService.open(component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public showAddCashMovementDialog(){
    this.openDialog(AddCashMovementDialogComponent);
  }
}
