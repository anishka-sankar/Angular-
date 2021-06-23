import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountantComponent } from './view-accountant.component';

describe('ViewAccountantComponent', () => {
  let component: ViewAccountantComponent;
  let fixture: ComponentFixture<ViewAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
