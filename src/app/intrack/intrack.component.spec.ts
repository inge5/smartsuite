import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrackComponent } from './intrack.component';

describe('IntrackComponent', () => {
  let component: IntrackComponent;
  let fixture: ComponentFixture<IntrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
