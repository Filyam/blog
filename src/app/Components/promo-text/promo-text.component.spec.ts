import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoTextComponent } from './promo-text.component';

describe('PromoTextComponent', () => {
  let component: PromoTextComponent;
  let fixture: ComponentFixture<PromoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
