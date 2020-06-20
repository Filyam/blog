import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDivAboutComponent } from './sidebar-div-about.component';

describe('SidebarDivAboutComponent', () => {
  let component: SidebarDivAboutComponent;
  let fixture: ComponentFixture<SidebarDivAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDivAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDivAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
