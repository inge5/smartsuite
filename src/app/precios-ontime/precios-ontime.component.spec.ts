import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosOntimeComponent } from './precios-ontime.component';

describe('PreciosOntimeComponent', () => {
  let component: PreciosOntimeComponent;
  let fixture: ComponentFixture<PreciosOntimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosOntimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosOntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
