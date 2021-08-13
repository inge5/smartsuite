import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOntimeComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarOntimeComponent;
  let fixture: ComponentFixture<SidebarOntimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarOntimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarOntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
