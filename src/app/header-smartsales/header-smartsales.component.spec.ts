import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSmartsalesComponent } from './header-smartsales.component';

describe('HeaderSmartsalesComponent', () => {
  let component: HeaderSmartsalesComponent;
  let fixture: ComponentFixture<HeaderSmartsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSmartsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSmartsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
