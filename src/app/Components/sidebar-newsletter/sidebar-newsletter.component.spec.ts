import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNewsletterComponent } from './sidebar-newsletter.component';

describe('SidebarNewsletterComponent', () => {
  let component: SidebarNewsletterComponent;
  let fixture: ComponentFixture<SidebarNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
