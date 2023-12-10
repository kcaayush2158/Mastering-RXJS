import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoNewObservableComponent } from './two-new-observable.component';

describe('TwoNewObservableComponent', () => {
  let component: TwoNewObservableComponent;
  let fixture: ComponentFixture<TwoNewObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoNewObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoNewObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
