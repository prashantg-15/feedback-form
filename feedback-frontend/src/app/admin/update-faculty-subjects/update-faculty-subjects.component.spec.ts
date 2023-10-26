import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFacultySubjectsComponent } from './update-faculty-subjects.component';

describe('UpdateFacultySubjectsComponent', () => {
  let component: UpdateFacultySubjectsComponent;
  let fixture: ComponentFixture<UpdateFacultySubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFacultySubjectsComponent]
    });
    fixture = TestBed.createComponent(UpdateFacultySubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
