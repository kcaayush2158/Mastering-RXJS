import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixteenBufferTimerOperatorComponent } from './sixteen-buffer-timer-operator.component';

describe('SixteenBufferTimerOperatorComponent', () => {
  let component: SixteenBufferTimerOperatorComponent;
  let fixture: ComponentFixture<SixteenBufferTimerOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixteenBufferTimerOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixteenBufferTimerOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
