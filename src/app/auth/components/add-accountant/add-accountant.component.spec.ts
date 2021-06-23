import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountantComponent } from './add-accountant.component';

describe('AddAccountantComponent', () => {
  let component: AddAccountantComponent;
  let fixture: ComponentFixture<AddAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
