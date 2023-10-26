import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultySubjects } from 'src/app/class/FacultySubjects/faculty-subjects';
import { FacultySubjectsService } from 'src/app/services/restAPI/faculty-subjects.service';

interface options {
  name: string | undefined;
}

@Component({
  selector: 'app-create-faculty-subjects',
  templateUrl: './create-faculty-subjects.component.html',
  styleUrls: ['./create-faculty-subjects.component.scss']
})
export class CreateFacultySubjectsComponent {

  facultyNamesList: String[] = [];
  options: options[] = [
    { name: "YES" }, { name: "NO" }];

  options1: options[] = [
    { name: "FYMCA" }, { name: "SYMCA" }];

  customFacultyName: string = '';
  handleCustomFacultyNameChange(event: any) {
    // This function will be called when the custom value is changed
    // You can access the custom value using this.customFacultyName
    this.customFacultyName = event;
    console.log('Custom Faculty Name:', this.customFacultyName);
  }
  ngOnInit() {
    this.facultySubjectsService.getFacultyNameList().subscribe(data => {
      this.facultyNamesList = data;
    });
  }
  facultySubjects: FacultySubjects = new FacultySubjects();

  constructor(private facultySubjectsService: FacultySubjectsService,
    private router: Router, private fb: FormBuilder) { }

  facultySubjectsForm: FormGroup = this.fb.group({
    className: ['', Validators.required],
    facultyName: ['', Validators.required],
    subject: ['', Validators.required],
    isElective: ['NO']
  });


  saveFacultySubjectsEntry() {
    if (this.facultySubjectsForm.valid) {
      this.facultySubjects.className = this.facultySubjectsForm.get('className')?.value?.name;
      this.facultySubjects.faculty_name = this.facultySubjectsForm.get('facultyName')?.value?.name || this.facultySubjectsForm.get('facultyName')?.value;

      this.facultySubjects.subject = this.facultySubjectsForm.get('subject')?.value;
      this.facultySubjects.isElective = this.facultySubjectsForm.get('isElective')?.value?.name;

      this.facultySubjectsService.createFacultySubjects(this.facultySubjects).subscribe(response => {
        if (typeof response === 'string' && response === 'Inserted Successfully') {
          console.log('Data inserted successfully');
          this.goToFacultySubjectsList();
        } else {
          console.log('Unexpected response:', response);
        }
        this.goToFacultySubjectsList();
      },
        error => console.log(error));
    }
  }
  goToFacultySubjectsList() {
    console.log("Hii route");
    this.router.navigate(['/facultySubjectsList']);
  }

  onSubmit() {
    console.log(this.facultySubjects);
    this.saveFacultySubjectsEntry();
  }
}

