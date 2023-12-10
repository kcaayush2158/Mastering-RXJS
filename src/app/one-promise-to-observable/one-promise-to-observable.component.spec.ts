import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePromiseToObservableComponent } from './one-promise-to-observable.component';

describe('OnePromiseToObservableComponent', () => {
  let component: OnePromiseToObservableComponent;
  let fixture: ComponentFixture<OnePromiseToObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePromiseToObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePromiseToObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
