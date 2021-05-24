import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartsuiteComponent } from './smartsuite.component';

describe('SmartsuiteComponent', () => {
  let component: SmartsuiteComponent;
  let fixture: ComponentFixture<SmartsuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartsuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartsuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
