import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainThumbnailComponent } from './main-thumbnail.component';

describe('MainThumbnailComponent', () => {
  let component: MainThumbnailComponent;
  let fixture: ComponentFixture<MainThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
