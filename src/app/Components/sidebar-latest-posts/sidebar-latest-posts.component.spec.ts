import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLatestPostsComponent } from './sidebar-latest-posts.component';

describe('SidebarLatestPostsComponent', () => {
  let component: SidebarLatestPostsComponent;
  let fixture: ComponentFixture<SidebarLatestPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLatestPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLatestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
