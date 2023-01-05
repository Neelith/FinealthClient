import { Component } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { Category } from 'src/app/entities/category';
import { CategoryRepositoryService } from 'src/app/persistance/services/category-repository.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent {
  categories$: Observable<Category[]>;

  constructor(private categoryRepository: CategoryRepositoryService) {
    this.categories$ = this.categoryRepository.getAllCategories();
  }

  onAddCategory() {
    let categories : Category[] = [
      {
        categoryId: 1,
        name: 'Stipendio',
        iconUrl: '../../../assets/icons/money-profit-icon.png',
      },
      {
        categoryId: 2,
        name: 'Shopping',
        iconUrl: '../../../assets/icons/money-lost-icon.png',
      },
      {
        categoryId: 3,
        name: 'Affitto',
        iconUrl: '../../../assets/icons/money-lost-icon.png',
      },
    ];

    for (const category of categories) {
      this.categoryRepository
      .add(category)
      .pipe(
        finalize(() => {
          this.categories$ = this.categoryRepository.getAllCategories();
        })
      )
      .subscribe();
    }
  }

  onEditCategory(category: Category) {
    console.log(category)
  }
}
