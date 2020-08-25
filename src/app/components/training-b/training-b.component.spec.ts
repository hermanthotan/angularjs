import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingBComponent } from './training-b.component';

describe('TrainingBComponent', () => {
  let component: TrainingBComponent;
  let fixture: ComponentFixture<TrainingBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
