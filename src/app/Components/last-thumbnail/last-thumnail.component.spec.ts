import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastThumnailComponent } from './last-thumnail.component';

describe('LastThumnailComponent', () => {
  let component: LastThumnailComponent;
  let fixture: ComponentFixture<LastThumnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastThumnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastThumnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
