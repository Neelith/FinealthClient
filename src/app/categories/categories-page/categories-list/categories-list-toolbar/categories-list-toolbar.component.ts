import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories-list-toolbar',
  templateUrl: './categories-list-toolbar.component.html',
  styleUrls: ['./categories-list-toolbar.component.scss'],
})
export class CategoriesListToolbarComponent {
  @Output() onAddCategoryEvent = new EventEmitter();

  onAddCategory() {
    this.onAddCategoryEvent.emit();
  }
}
