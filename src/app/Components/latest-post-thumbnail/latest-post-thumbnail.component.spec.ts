import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostThumbnailComponent } from './latest-post-thumbnail.component';

describe('LatestPostThumbnailComponent', () => {
  let component: LatestPostThumbnailComponent;
  let fixture: ComponentFixture<LatestPostThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPostThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPostThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
