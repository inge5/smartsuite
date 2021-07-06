import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosMobileformsComponent } from './precios-mobileforms.component';

describe('PreciosMobileformsComponent', () => {
  let component: PreciosMobileformsComponent;
  let fixture: ComponentFixture<PreciosMobileformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosMobileformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosMobileformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
