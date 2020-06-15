import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderComponent } from './ender.component';

describe('EnderComponent', () => {
  let component: EnderComponent;
  let fixture: ComponentFixture<EnderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
