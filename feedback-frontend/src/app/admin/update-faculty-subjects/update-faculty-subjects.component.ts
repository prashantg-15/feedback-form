import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultySubjects } from 'src/app/class/FacultySubjects/faculty-subjects';
import { FacultySubjectsService } from 'src/app/services/restAPI/faculty-subjects.service';

interface options {
  name: string | undefined;
}

@Component({
  selector: 'app-update-faculty-subjects',
  templateUrl: './update-faculty-subjects.component.html',
  styleUrls: ['./update-faculty-subjects.component.scss']
})
export class UpdateFacultySubjectsComponent {

  className: any;
  isElective: any;
  index: any;
  index1: any;
  id!: number;
  facultyNamesList: String[] = [];

  options: options[] = [
    { name: "YES" }, 
    { name: "NO" }
  ];

  options1: options[] = [
    { name: "FYMCA" },
    { name: "SYMCA" }
  ];

  facultySubjectsForm!: FormGroup;
  customFacultyName: string = '';
  facultySubjectsPreviousData: FacultySubjects = new FacultySubjects();
  facultySubjects: FacultySubjects = new FacultySubjects();
  handleCustomFacultyNameChange(event: any) {
    this.customFacultyName = event;
    console.log('Custom Faculty Name:', this.customFacultyName);
  }
  handleCustomClassNameChange(event: any) {

  }
  constructor(
    private route: ActivatedRoute,
    private facultySubjectsService: FacultySubjectsService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.facultySubjectsForm = this.fb.group({
      className: [this.facultySubjectsPreviousData.className, Validators.required],
      facultyName: [this.facultySubjectsPreviousData.faculty_name, Validators.required],
      subject: [this.facultySubjectsPreviousData.subject, Validators.required],
      isElective: [this.facultySubjectsPreviousData.isElective, Validators.required]
    });
  }


  ngOnInit() {
    this.facultySubjectsService.getFacultyNameList().subscribe(data => {
      this.facultyNamesList = data;
    });

    this.id = this.route.snapshot.params['id'];
    this.facultySubjectsService.getFacultySubjectsById(this.id).subscribe(data => {
      this.facultySubjectsPreviousData = data;
      console.log(this.facultySubjectsPreviousData.isElective);
      this.index = this.options1.findIndex(option => option.name === this.facultySubjectsPreviousData.className);
      this.className = this.options1[this.index];
      this.index1 = this.options.findIndex(option => option.name === this.facultySubjectsPreviousData.isElective);
      this.isElective = this.options[this.index1];
    }, error => console.log(error));
  }


  saveFacultySubjectsEntry() {
    if (this.facultySubjectsForm.valid) {
      this.facultySubjects.className = this.facultySubjectsForm.get('className')?.value?.name;
      this.facultySubjects.faculty_name = this.facultySubjectsForm.get('facultyName')?.value?.name || this.facultySubjectsForm.get('facultyName')?.value;

      this.facultySubjects.subject = this.facultySubjectsForm.get('subject')?.value;
      this.facultySubjects.isElective = this.facultySubjectsForm.get('isElective')?.value?.name;

      this.facultySubjectsService.updateFacultySubjects(this.id, this.facultySubjects).subscribe(response => {
        if (typeof response === 'string' && response === 'Updated Successfully') {
          console.log('Data inserted successfully');
          this.goToFacultySubjectsList();
        } else {
          console.log('Unexpected response:', response);
        }
      },
        error => console.log(error));
    }
  }
  goToFacultySubjectsList() {
    this.router.navigate(['/facultySubjectsList']);
  }

  onSubmit() {
    console.log(this.facultySubjects);
    this.saveFacultySubjectsEntry();
  }
}
