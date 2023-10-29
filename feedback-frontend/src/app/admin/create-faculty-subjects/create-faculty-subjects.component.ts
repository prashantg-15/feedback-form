import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultySubjects } from 'src/app/class/FacultySubjects/faculty-subjects';
import { FacultySubjectsService } from 'src/app/services/restAPI/faculty-subjects.service';
import { MessageService } from 'primeng/api';

interface options {
  name: string | undefined;
}

@Component({
  selector: 'app-create-faculty-subjects',
  templateUrl: './create-faculty-subjects.component.html',
  styleUrls: ['./create-faculty-subjects.component.scss'],
  providers: [MessageService]
})
export class CreateFacultySubjectsComponent {

  facultyNamesList: FacultySubjects[] = [];
  facultyNames: any[] = [];
  uniqueFacultyNames: any[] = [];
  facultyName: any;
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
    this.facultySubjectsService.getFacultySubjectsList().subscribe(data => {
      this.facultyNamesList = data;
      this.facultyNames = this.facultyNamesList.map(item => item.faculty_name);
      this.uniqueFacultyNames = [...new Set(this.facultyNames)];
      this.facultyName = this.uniqueFacultyNames.map(facultyName => ({ faculty_name: facultyName }));
    });
  }
  facultySubjects: FacultySubjects = new FacultySubjects();

  constructor(private messageService: MessageService, private facultySubjectsService: FacultySubjectsService,
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
      if(this.facultySubjects.faculty_name.faculty_name) {
        this.facultySubjects.faculty_name = this.facultySubjects.faculty_name.faculty_name;
      }
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
        },(error) => {
          // Handle errors here
          // console.log(error);
          this.showTopCenter();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
    }
  }
  goToFacultySubjectsList() {
    console.log("Hii route");
    this.router.navigate(['/facultySubjectsList']);
  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Faculty Subject Added Successfully' });
  }

  onSubmit() {
    console.log(this.facultySubjects);
    this.saveFacultySubjectsEntry();
  }
}

