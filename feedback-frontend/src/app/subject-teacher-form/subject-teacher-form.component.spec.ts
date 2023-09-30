import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTeacherFormComponent } from './subject-teacher-form.component';

describe('SubjectTeacherFormComponent', () => {
  let component: SubjectTeacherFormComponent;
  let fixture: ComponentFixture<SubjectTeacherFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectTeacherFormComponent]
    });
    fixture = TestBed.createComponent(SubjectTeacherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
