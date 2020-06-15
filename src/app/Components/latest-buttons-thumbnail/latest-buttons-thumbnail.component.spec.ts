import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestButtonsThumbnailComponent } from './latest-buttons-thumbnail.component';

describe('LatestButtonsThumbnailComponent', () => {
  let component: LatestButtonsThumbnailComponent;
  let fixture: ComponentFixture<LatestButtonsThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestButtonsThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestButtonsThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
