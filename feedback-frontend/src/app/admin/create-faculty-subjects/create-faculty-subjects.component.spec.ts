import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFacultySubjectsComponent } from './create-faculty-subjects.component';

describe('CreateFacultySubjectsComponent', () => {
  let component: CreateFacultySubjectsComponent;
  let fixture: ComponentFixture<CreateFacultySubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFacultySubjectsComponent]
    });
    fixture = TestBed.createComponent(CreateFacultySubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
