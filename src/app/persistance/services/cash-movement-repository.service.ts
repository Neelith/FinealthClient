import { Injectable } from '@angular/core';
import { NgxIndexedDBService, WithID } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { CashMovement } from 'src/app/entities/cash-movement';

@Injectable({
  providedIn: 'root',
})
export class CashMovementRepositoryService {
  readonly storeName = 'CashMovements';
  constructor(private dbService: NgxIndexedDBService) {}

  add(cashMovement: CashMovement) : Observable<CashMovement & WithID> {
    return this.dbService.add<CashMovement>(this.storeName, cashMovement);
  }

  edit(cashMovement: CashMovement) {
    return this.dbService.update<CashMovement>(this.storeName, cashMovement);
  }

  deleteCashMovementById(cashMovementId: number): Observable<CashMovement[]> {
    return this.dbService.delete<CashMovement>(this.storeName, cashMovementId);
  }

  getAllCashMovements(): Observable<CashMovement[]> {
    return this.dbService.getAll<CashMovement>(this.storeName);
  }
}
