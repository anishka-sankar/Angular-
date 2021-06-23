import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoumnOneComponent } from './coloumn-one.component';

describe('ColoumnOneComponent', () => {
  let component: ColoumnOneComponent;
  let fixture: ComponentFixture<ColoumnOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoumnOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoumnOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
