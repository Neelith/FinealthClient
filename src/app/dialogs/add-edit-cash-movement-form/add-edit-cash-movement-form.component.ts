import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-add-edit-cash-movement-form',
  templateUrl: './add-edit-cash-movement-form.component.html',
  styleUrls: ['./add-edit-cash-movement-form.component.scss']
})
export class AddEditCashMovementFormComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() submitButtonText : string = 'Submit';
  @Input() categories : Category[] = [];
  @Output() submitFormEvent = new EventEmitter<FormGroup>();

  onSubmitFormEvent(){
    this.submitFormEvent.emit(this.form);
  }
}
