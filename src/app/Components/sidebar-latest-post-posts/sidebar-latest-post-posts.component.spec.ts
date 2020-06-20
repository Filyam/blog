import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLatestPostPostsComponent } from './sidebar-latest-post-posts.component';

describe('SidebarLatestPostPostsComponent', () => {
  let component: SidebarLatestPostPostsComponent;
  let fixture: ComponentFixture<SidebarLatestPostPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLatestPostPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLatestPostPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
