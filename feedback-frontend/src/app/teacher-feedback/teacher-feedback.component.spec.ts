import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFeedbackComponent } from './teacher-feedback.component';

describe('TeacherFeedbackComponent', () => {
  let component: TeacherFeedbackComponent;
  let fixture: ComponentFixture<TeacherFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherFeedbackComponent]
    });
    fixture = TestBed.createComponent(TeacherFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
