import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTopdownComponent } from './pages-topdown.component';

describe('PagesTopdownComponent', () => {
  let component: PagesTopdownComponent;
  let fixture: ComponentFixture<PagesTopdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesTopdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesTopdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
