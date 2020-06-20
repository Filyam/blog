import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderImagesComponent } from './ender-images.component';

describe('EnderImagesComponent', () => {
  let component: EnderImagesComponent;
  let fixture: ComponentFixture<EnderImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
