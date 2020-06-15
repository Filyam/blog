import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureHomeComponent } from './picture-home.component';

describe('PictureHomeComponent', () => {
  let component: PictureHomeComponent;
  let fixture: ComponentFixture<PictureHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
