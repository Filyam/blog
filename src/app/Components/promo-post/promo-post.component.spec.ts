import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPostComponent } from './promo-post.component';

describe('PromoPostComponent', () => {
  let component: PromoPostComponent;
  let fixture: ComponentFixture<PromoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
