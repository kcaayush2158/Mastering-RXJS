import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighteenBufferWhenOperatorComponent } from './eighteen-buffer-when-operator.component';

describe('EighteenBufferWhenOperatorComponent', () => {
  let component: EighteenBufferWhenOperatorComponent;
  let fixture: ComponentFixture<EighteenBufferWhenOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighteenBufferWhenOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EighteenBufferWhenOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
