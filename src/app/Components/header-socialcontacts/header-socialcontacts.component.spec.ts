import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSocialcontactsComponent } from './header-socialcontacts.component';

describe('HeaderSocialcontactsComponent', () => {
  let component: HeaderSocialcontactsComponent;
  let fixture: ComponentFixture<HeaderSocialcontactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSocialcontactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSocialcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
