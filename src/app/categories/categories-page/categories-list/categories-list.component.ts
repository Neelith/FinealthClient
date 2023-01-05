import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent {
  @Input() categories$!: Observable<Category[]>;
  @Output() onAddCategoryEvent = new EventEmitter();
  @Output() onEditCategoryEvent = new EventEmitter<Category>();

  onAddCategory() {
    this.onAddCategoryEvent.emit();
  }

  onEditCategory(category: Category) {
    this.onEditCategoryEvent.emit(category);
  }
}
