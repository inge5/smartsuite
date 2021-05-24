import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosCaretaskComponent } from './precios-caretask.component';

describe('PreciosCaretaskComponent', () => {
  let component: PreciosCaretaskComponent;
  let fixture: ComponentFixture<PreciosCaretaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosCaretaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosCaretaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
