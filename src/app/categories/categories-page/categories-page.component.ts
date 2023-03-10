import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  concatMap,
  EMPTY,
  finalize,
  map,
  Observable,
  Subscription,
} from 'rxjs';
import { DialogService } from 'src/app/dialogs/services/dialog.service';
import { Category } from 'src/app/entities/category';
import { CategoryRepositoryService } from 'src/app/persistance/services/category-repository.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  categories$: Observable<Category[]>;
  iconUrls: string[] = [
    '../../../assets/icons/money-lost-icon.png',
    '../../../assets/icons/money-profit-icon.png',
  ];

  constructor(
    private categoryRepository: CategoryRepositoryService,
    private dialogService: DialogService
  ) {
    this.categories$ = this.categoryRepository.getAllCategories();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddCategory() {
    this.subscription.add(
      this.dialogService
        .showAddCategoryDialog(this.iconUrls)
        .afterClosed()
        .pipe(
          map((form) => {
            let category: Category | null = null;

            if (form.valid) {
              category = new Category();
              category.name = form.value.name;
              category.iconUrl = form.value.iconUrl;
            }

            return category;
          }),
          concatMap((category) => {
            if (category !== null) {
              return this.categoryRepository.add(category);
            }
            return EMPTY;
          }),
          finalize(() => {
            this.categories$ = this.categoryRepository.getAllCategories();
          })
        )
        .subscribe()
    );
  }

  onEditCategory(category: Category) {
    this.subscription.add(
      this.dialogService
        .showEditCategoryDialog({ iconUrls: this.iconUrls, category: category })
        .afterClosed()
        .pipe(
          map((form) => {
            let editedCategory: Category | null = null;

            if (form.valid) {
              editedCategory = new Category();
              editedCategory.name = form.value.name;
              editedCategory.iconUrl = form.value.iconUrl;
              editedCategory.categoryId = category.categoryId;
            }

            return editedCategory;
          }),
          concatMap((category) => {
            if (category !== null) {
              return this.categoryRepository.edit(category);
            }
            return EMPTY;
          }),
          finalize(() => {
            this.categories$ = this.categoryRepository.getAllCategories();
          })
        )
        .subscribe()
    );
  }




}
