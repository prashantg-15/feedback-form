import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFacultySubjectsComponent } from './details-faculty-subjects.component';

describe('DetailsFacultySubjectsComponent', () => {
  let component: DetailsFacultySubjectsComponent;
  let fixture: ComponentFixture<DetailsFacultySubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsFacultySubjectsComponent]
    });
    fixture = TestBed.createComponent(DetailsFacultySubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
