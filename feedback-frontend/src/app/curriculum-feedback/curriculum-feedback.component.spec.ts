import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumFeedbackComponent } from './curriculum-feedback.component';

describe('CurriculumFeedbackComponent', () => {
  let component: CurriculumFeedbackComponent;
  let fixture: ComponentFixture<CurriculumFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumFeedbackComponent]
    });
    fixture = TestBed.createComponent(CurriculumFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
