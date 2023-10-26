import { TestBed } from '@angular/core/testing';

import { FacultySubjectsService } from './faculty-subjects.service';

describe('FacultySubjectsService', () => {
  let service: FacultySubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultySubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
