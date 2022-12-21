import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCashMovementDialogComponent } from './add-cash-movement-dialog.component';

describe('AddCashMovementDialogComponent', () => {
  let component: AddCashMovementDialogComponent;
  let fixture: ComponentFixture<AddCashMovementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCashMovementDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCashMovementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
