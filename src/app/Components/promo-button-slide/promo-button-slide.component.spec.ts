import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoButtonSlideComponent } from './promo-button-slide.component';

describe('PromoButtonSlideComponent', () => {
  let component: PromoButtonSlideComponent;
  let fixture: ComponentFixture<PromoButtonSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoButtonSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoButtonSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
