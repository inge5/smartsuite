import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileformsComponent } from './mobileforms.component';

describe('MobileformsComponent', () => {
  let component: MobileformsComponent;
  let fixture: ComponentFixture<MobileformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
