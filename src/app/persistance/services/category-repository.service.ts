import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { Category } from 'src/app/entities/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryRepositoryService {

  readonly storeName = 'Categories';
  constructor(private dbService: NgxIndexedDBService) {}

  getAllCategories(): Observable<Category[]> {
    return this.dbService.getAll<Category>(this.storeName);
  }

  add(category: Category) {
    return this.dbService.add<Category>(this.storeName, category);
  }

  edit(category: Category): any {
    return this.dbService.update<Category>(this.storeName, category);
  }
}
