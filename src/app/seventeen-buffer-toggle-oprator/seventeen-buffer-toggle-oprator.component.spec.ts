import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventeenBufferToggleOpratorComponent } from './seventeen-buffer-toggle-oprator.component';

describe('SeventeenBufferToggleOpratorComponent', () => {
  let component: SeventeenBufferToggleOpratorComponent;
  let fixture: ComponentFixture<SeventeenBufferToggleOpratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventeenBufferToggleOpratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventeenBufferToggleOpratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
