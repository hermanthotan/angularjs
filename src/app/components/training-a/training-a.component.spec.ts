import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAComponent } from './training-a.component';

describe('TrainingAComponent', () => {
  let component: TrainingAComponent;
  let fixture: ComponentFixture<TrainingAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
