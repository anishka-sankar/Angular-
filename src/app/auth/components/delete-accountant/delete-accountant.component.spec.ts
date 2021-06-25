import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountantComponent } from './delete-accountant.component';

describe('DeleteAccountantComponent', () => {
  let component: DeleteAccountantComponent;
  let fixture: ComponentFixture<DeleteAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAccountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
