import { Injectable } from '@angular/core';
import { NgxIndexedDBService, WithID } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { CashMovement } from 'src/app/entities/cash-movement';

@Injectable({
  providedIn: 'root',
})
export class CashMovementRepositoryService {
  constructor(private dbService: NgxIndexedDBService) {}

  add(cashMovement: CashMovement) : Observable<CashMovement & WithID> {
    return this.dbService.add('CashMovements', cashMovement);
  }

  deleteCashMovementById(cashMovementId: number): Observable<CashMovement[]> {
    return this.dbService.delete<CashMovement>('CashMovements', cashMovementId);
  }

  getAllCashMovements(): Observable<CashMovement[]> {
    return this.dbService.getAll<CashMovement>('CashMovements');
  }
}
