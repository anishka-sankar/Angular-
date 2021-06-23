import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueFeesComponent } from './due-fees.component';

describe('DueFeesComponent', () => {
  let component: DueFeesComponent;
  let fixture: ComponentFixture<DueFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DueFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
