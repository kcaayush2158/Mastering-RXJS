import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitionOpratorComponent } from './partition-oprator.component';

describe('PartitionOpratorComponent', () => {
  let component: PartitionOpratorComponent;
  let fixture: ComponentFixture<PartitionOpratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartitionOpratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartitionOpratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
