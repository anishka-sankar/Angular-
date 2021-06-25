import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountantComponent } from './edit-accountant.component';

describe('EditAccountantComponent', () => {
  let component: EditAccountantComponent;
  let fixture: ComponentFixture<EditAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
