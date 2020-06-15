import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAddsComponent } from './sidebar-adds.component';

describe('SidebarAddsComponent', () => {
  let component: SidebarAddsComponent;
  let fixture: ComponentFixture<SidebarAddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
