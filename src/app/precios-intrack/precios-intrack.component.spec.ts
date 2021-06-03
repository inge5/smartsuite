import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosIntrackComponent } from './precios-intrack.component';

describe('PreciosIntrackComponent', () => {
  let component: PreciosIntrackComponent;
  let fixture: ComponentFixture<PreciosIntrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosIntrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosIntrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
