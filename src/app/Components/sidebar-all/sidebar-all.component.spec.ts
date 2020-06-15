import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAllComponent } from './sidebar-all.component';

describe('SidebarAllComponent', () => {
  let component: SidebarAllComponent;
  let fixture: ComponentFixture<SidebarAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
