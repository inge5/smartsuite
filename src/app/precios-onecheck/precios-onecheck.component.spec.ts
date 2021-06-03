import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosOnecheckComponent } from './precios-onecheck.component';

describe('PreciosOnecheckComponent', () => {
  let component: PreciosOnecheckComponent;
  let fixture: ComponentFixture<PreciosOnecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosOnecheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosOnecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
