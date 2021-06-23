import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantHomeComponent } from './accountant-home.component';

describe('HomeComponent', () => {
  let component: AccountantHomeComponent;
  let fixture: ComponentFixture<AccountantHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountantHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
