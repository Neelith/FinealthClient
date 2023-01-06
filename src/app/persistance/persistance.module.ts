import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { indexedDbConfig } from './indexedDbConfig';
import { CashMovementRepositoryService } from './services/cash-movement-repository.service';
import { CategoryRepositoryService } from './services/category-repository.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxIndexedDBModule.forRoot(indexedDbConfig)
  ],
  exports: [NgxIndexedDBModule],
  providers: [CashMovementRepositoryService, CategoryRepositoryService]
})
export class PersistanceModule {}
