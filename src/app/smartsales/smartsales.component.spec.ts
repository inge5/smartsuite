import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartsalesComponent } from './smartsales.component';

describe('SmartsalesComponent', () => {
  let component: SmartsalesComponent;
  let fixture: ComponentFixture<SmartsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
