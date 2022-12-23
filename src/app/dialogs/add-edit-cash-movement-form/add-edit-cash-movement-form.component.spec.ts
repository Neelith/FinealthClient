import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCashMovementFormComponent } from './add-edit-cash-movement-form.component';

describe('AddEditCashMovementFormComponent', () => {
  let component: AddEditCashMovementFormComponent;
  let fixture: ComponentFixture<AddEditCashMovementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCashMovementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCashMovementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
