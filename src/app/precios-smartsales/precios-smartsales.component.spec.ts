import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosSmartsalesComponent } from './precios-smartsales.component';

describe('PreciosSmartsalesComponent', () => {
  let component: PreciosSmartsalesComponent;
  let fixture: ComponentFixture<PreciosSmartsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosSmartsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosSmartsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
