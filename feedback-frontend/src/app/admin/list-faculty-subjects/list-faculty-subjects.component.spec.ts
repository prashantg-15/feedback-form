import { ComponentFixture, TestBed } from '@angular/core/testing';

import ListFacultySubjectsComponent from './list-faculty-subjects.component';

describe('ListFacultySubjectsComponent', () => {
  let component: ListFacultySubjectsComponent;
  let fixture: ComponentFixture<ListFacultySubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFacultySubjectsComponent]
    });
    fixture = TestBed.createComponent(ListFacultySubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
