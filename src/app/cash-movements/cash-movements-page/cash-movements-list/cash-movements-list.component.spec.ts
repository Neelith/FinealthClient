import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashMovementsListComponent } from './cash-movements-list.component';

describe('CashMovementsListComponent', () => {
  let component: CashMovementsListComponent;
  let fixture: ComponentFixture<CashMovementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashMovementsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashMovementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
