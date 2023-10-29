import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultySubjects } from 'src/app/class/FacultySubjects/faculty-subjects';
import { FacultySubjectsService } from 'src/app/services/restAPI/faculty-subjects.service';
import { MessageService } from 'primeng/api';

interface options {
  name: string | undefined;
}

@Component({
  selector: 'app-update-faculty-subjects',
  templateUrl: './update-faculty-subjects.component.html',
  styleUrls: ['./update-faculty-subjects.component.scss'],
  providers: [MessageService]
})
export class UpdateFacultySubjectsComponent {

  className: any;
  isElective: any;
  index: any;
  index1: any;
  id!: number;
  facultyNamesList: FacultySubjects[] = [];
  facultyNames: any[] = [];
  uniqueFacultyNames: any[] = [];
  facultyName: any;

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
    private messageService: MessageService,
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
    this.facultySubjectsService.getFacultySubjectsList().subscribe(data => {
      this.facultyNamesList = data;
      this.facultyNames = this.facultyNamesList.map(item => item.faculty_name);
      this.uniqueFacultyNames = [...new Set(this.facultyNames)];
      this.facultyName = this.uniqueFacultyNames.map(facultyName => ({ faculty_name: facultyName }));
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
      if (this.facultySubjects.faculty_name.faculty_name) {
        this.facultySubjects.faculty_name = this.facultySubjects.faculty_name.faculty_name;
      }
      this.facultySubjects.subject = this.facultySubjectsForm.get('subject')?.value;
      this.facultySubjects.isElective = this.facultySubjectsForm.get('isElective')?.value?.name;

      this.facultySubjectsService.updateFacultySubjects(this.id, this.facultySubjects).subscribe(response => {
        if (typeof response === 'string' && response === 'Inserted Successfully') {
          console.log('Data inserted successfully');
          this.goToFacultySubjectsList();
        } else {
          console.log('Unexpected response:', response);
        }
        this.goToFacultySubjectsList();
      }, (error) => {
        // Handle errors here
        // console.log(error);
        this.showTopCenter();
        setTimeout(() => {
          this.goToFacultySubjectsList();
        }, 2000);
      });
    }
  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Faculty Subject Updated Successfully' });
  }

  goToFacultySubjectsList() {
    this.router.navigate(['/facultySubjectsList']);
  }

  onSubmit() {
    console.log(this.facultySubjects);
    this.saveFacultySubjectsEntry();
  }
}
