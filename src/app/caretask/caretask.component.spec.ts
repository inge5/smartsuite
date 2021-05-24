import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaretaskComponent } from './caretask.component';

describe('CaretaskComponent', () => {
  let component: CaretaskComponent;
  let fixture: ComponentFixture<CaretaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaretaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaretaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
