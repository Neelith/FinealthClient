import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-category-form',
  templateUrl: './add-edit-category-form.component.html',
  styleUrls: ['./add-edit-category-form.component.scss']
})
export class AddEditCategoryFormComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() submitButtonText: string = 'Submit';
  @Input() iconUrls : string[] = [];
  @Output() submitFormEvent = new EventEmitter<FormGroup>();

  onSubmitFormEvent() {
    this.submitFormEvent.emit(this.form);
  }
}
