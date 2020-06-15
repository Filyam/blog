import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoButtonReadmoreComponent } from './promo-button-readmore.component';

describe('PromoButtonReadmoreComponent', () => {
  let component: PromoButtonReadmoreComponent;
  let fixture: ComponentFixture<PromoButtonReadmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoButtonReadmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoButtonReadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
